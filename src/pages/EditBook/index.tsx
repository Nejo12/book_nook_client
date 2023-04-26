import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/spinner';
import { url } from '../../Routes';

const EditBook = (): JSX.Element => {
  const navigate = useNavigate();
  const id = useParams();

  const [state, setState] = React.useState({
    _id: '',
    title: '',
    isbn: '',
    description: '',
    copies: '',
    author: '',
    publisher: '',
    publishedDate: '',
  });

  const bookId = id.id!;

  useEffect(() => {
    try {
      axios.get(`${url}/api/books/${bookId}`).then((response) => {
        setState(response.data.book);
      });
    } catch (err) {
      console.log(err);
    }
  }, [bookId]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    const bookData = {
      title: state.title,
      isbn: state.isbn,
      author: state.author,
      description: state.description,
      publishedDate: state.publishedDate,
      publisher: state.publisher,
      copies: state.copies,
    };

    axios
      .put(`${url}/api/books/${bookId}`, bookData)
      .then((res) => {
        setState(state);
        toast.success(res.data.msg);
        setTimeout(() => {
          navigate(`/book-details/${bookId}`);
        }, 3000);
      })
      .catch((err) => console.log('Error creating book', err));
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target;
    const value = (target as HTMLInputElement).value;
    const name = (target as HTMLInputElement).name;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className='page-container p-2'>
      {state ? (
        <div>
          <Link to='/'>
            <img
              src='https://img.icons8.com/wired/64/000000/circled-left-2.png'
              alt='back-btn'
              className='back engrave'
            />
          </Link>
          <ToastContainer />
          <div className='listContainer p-2'>
            <form onChange={(e) => handleChange(e)}>
              <label>
                <input
                  type='text'
                  name='title'
                  defaultValue={state.title}
                  placeholder='Book Title'
                />
              </label>

              <label>
                <input
                  type='text'
                  name='isbn'
                  defaultValue={state.isbn}
                  placeholder='ISBN'
                />
              </label>

              <label>
                <input
                  type='text'
                  name='author'
                  defaultValue={state.author}
                  placeholder='Author'
                />
              </label>

              <label>
                <input
                  type='text'
                  name='description'
                  defaultValue={state.description}
                  placeholder='Book Description'
                />
              </label>

              <label>
                <input
                  type='date'
                  name='publishedDate'
                  defaultValue={state.publishedDate}
                  placeholder='published Date'
                />
              </label>

              <label>
                <input
                  type='text'
                  name='publisher'
                  defaultValue={state.publisher}
                  placeholder=' Book Publisher'
                />
              </label>

              <label>
                <input
                  type='number'
                  name='copies'
                  defaultValue={state.copies}
                  placeholder='Copies'
                />
              </label>

              <button
                type='submit'
                className='submit normal'
                onSubmit={(e) => handleSubmit(e)}>
                Submit...
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default EditBook;
