import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppState, BookProps } from '../../types/types';
import Spinner from '../spinner';

const BookCard = (props: BookProps) => {
  const { loading } = useSelector((state: AppState) => state.bookState);

  if (loading) {
    return <Spinner />;
  }

  const { _id, title, publisher, description, author } = props.bookData;

  return (
    <div className='cardContainer p-1'>
      <div className='logo'>
        <p className='bookListTitle'>{title}</p>
        <span className='sm italic'>Written by: </span>
        <span className='author'>{author}</span>
      </div>
      <p className='bookListDescription p-1'>{description}</p>
      <p>
        <span className='sm'>Publisher: </span>
        {publisher}
      </p>

      <Link to={`/book-details/${_id}`}>
        <button className='more submit'>View Details</button>
      </Link>
    </div>
  );
};

export default BookCard;
