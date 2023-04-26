import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Book } from '../../types/types';
import { url } from '../../Routes';

const initialState: Book = {
  _id: '',
  title: '',
  isbn: '',
  copies: 0,
  description: '',
  author: '',
  publishedDate: '',
  publisher: '',
};

const CreateBook = ({ history }: any): JSX.Element => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(initialState);

  const { title, author, description, publishedDate, publisher, copies, isbn } =
    state;

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target;
    const value = (target as HTMLInputElement).value;
    const name = (target as HTMLInputElement).name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    const bookData = {
      title,
      isbn,
      author,
      description,
      publishedDate,
      publisher,
      copies,
    };

    axios
      .post(`${url}/api/books/`, bookData)
      .then((res) => {
        setState(state);
        toast.success(res.data.msg);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => console.log('Error creating book', err));
  };
  return (
    <div className='page-container'>
      <p className='page-title lead emboss'>Create Book</p>
      <ToastContainer />
      <div className='p-2'>
        <form className='wrap' onChange={(e) => handleChange(e)}>
          <label>
            <input type='text' name='title' placeholder='Book Title' />
          </label>

          <label>
            <input type='text' name='isbn' placeholder='ISBN' />
          </label>

          <label>
            <input type='text' name='author' placeholder='Author' />
          </label>

          <label>
            <input
              type='text'
              name='description'
              placeholder='Book Description'
            />
          </label>

          <label>
            <input
              type='date'
              name='publishedDate'
              placeholder='published Date'
            />
          </label>

          <label>
            <input type='text' name='publisher' placeholder=' Book Publisher' />
          </label>

          <label>
            <input type='number' name='copies' placeholder='Copies' />
          </label>
        </form>
        <button
          type='submit'
          className='submit normal'
          onSubmit={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
