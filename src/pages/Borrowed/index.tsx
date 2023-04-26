import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { getBorrow } from '../../redux/actions/borrow';
import BookCard from '../../components/bookCard';
import { AppState, BookList } from '../../types/types';
import Spinner from '../../components/spinner';

const Borrowed = () => {
  const { _bookList, loading } = useSelector(
    (state: AppState) => state.borrowState,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBorrow());
  }, [dispatch]);

  return (
    <div className='page-container p2'>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <p className='page-title lead emboss'>Borrowed List</p>
          {_bookList.length === 3 ? (
            <p className='copies'>
              <span className='note hide-md'>NOTE: </span>
              <span className='engrave'>You can't have more than 3 books</span>
            </p>
          ) : (
            ''
          )}
          {_bookList.length < 1 ? (
            <h3 className='emboss center lead'>
              You currently have no borrowed book
            </h3>
          ) : (
            <div className='borrowed-container p-2'>
              {_bookList.map((bookList: BookList) => (
                <BookCard key={uuidv4()} bookData={bookList.books} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Borrowed;
