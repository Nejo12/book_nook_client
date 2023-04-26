import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchBookDetail } from '../../redux/actions/book';
import { borrowBook, returnBook } from '../../redux/actions/borrow';
import { AppState, Book, BookList } from '../../types/types';
import Spinner from '../../components/spinner';
import { url } from '../../Routes';
import BookCard from '../../components/bookCard';

interface IBorrowedBooks {
  books: Book[];
  borrowId: string[];
}

const BookDetail = (): JSX.Element => {
  const user = useSelector((state: AppState) => state.authState.user);
  const { loading, bookProps, isBorrowed } = useSelector(
    (state: AppState) => state.bookState,
  );
  const bookState = useSelector((state: AppState) => state.bookState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams();

  const bookId = id.id!;

  // Fetch a Book Detail
  useEffect(() => {
    dispatch(fetchBookDetail(bookId));
  }, [dispatch, bookId]);

  // When borrowing book
  const userId = user._id;

  const onBorrowClick = (bookId: string) => {
    const bookData = {
      userId,
      bookId,
    };
    dispatch(borrowBook(bookData));
    toast.success('Book Borrowed Successfully.');
    setTimeout(() => {
      navigate('/borrowed         ');
    }, 2000);
  };

  // When user intend returning borrowed book
  const onReturnClick = () => {
    if (bookState.borrow === null) {
      return;
    }
    const borrowId = bookState.borrow[0]._id;
    dispatch(returnBook(borrowId));
    toast.success('Book Returned Successfully.');
    setTimeout(() => {
      navigate('/borrowed');
    }, 2000);
  };

  const deleteBook = (bookId: string) => {
    axios.delete(`${url}/api/books/${bookId}`).then((res) => {
      if (res.status === 204) return toast(`Book Successfully Deleted`);
    });
    toast.success('Deleted');
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  return (
    <div className='page-container p-2'>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='nowrap'>
            <ToastContainer autoClose={1000} theme='dark' />
            {bookProps?.copies ? (
              <div className='emboss'>
                <span className='note hide-md'>NOTE: </span> We have{' '}
                <span className='copies lead'>
                  {' '}
                  {bookProps?.copies} {''}
                </span>{' '}
                copies left.
              </div>
            ) : null}

            <div>
              <span className='engrave'>Title: </span>{' '}
              <span className='details'> {bookProps?.title}</span>
            </div>
            <div>
              <span className='engrave'>Author: </span>
              <span className='details'> {bookProps?.author}</span>
            </div>

            <div>
              <span className='engrave'>Description: </span>
              <span className='details'>{bookProps?.description}</span>
            </div>

            <div>
              <span className='engrave'>ISBN: </span>
              <span className='details'> {bookProps?.isbn}</span>
            </div>
            <div>
              <span className='engrave'>Publisher: </span>
              <span className='details'> {bookProps?.publisher}</span>
            </div>
            <div>
              <span className='engrave'>Published on: </span>
              <span className='details'>
                {' '}
                {new Date(bookProps?.publishedDate).toDateString()}
              </span>
            </div>
          </div>

          {user.role === 'admin' ? (
            <div className='wrap'>
              <Link
                to={`/edit-book/${bookId}`}
                className='lead engrave submit edit'>
                Edit Book
              </Link>
              <button
                onClick={() => deleteBook(bookId)}
                className='lead engrave submit red'>
                Delete Book
              </button>
            </div>
          ) : (
            <div>
              {bookProps?.copies === 0 ? (
                <Link to='/'>
                  <h4 style={{ color: 'red' }} className='google-btn'>
                    No copies left. Check back later.
                  </h4>
                </Link>
              ) : (
                <div>
                  {!userId ? (
                    <Link to='/login'>
                      <button className='submit'>Login or Register</button>
                    </Link>
                  ) : (
                    <div>
                      {isBorrowed ? (
                        <button
                          className='submit'
                          onClick={() => onReturnClick()}>
                          Return this book
                        </button>
                      ) : (
                        <button
                          className='submit'
                          onClick={() => onBorrowClick(bookId)}>
                          Borrow this book
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <p className='page-title lead emboss'>Book Details </p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
