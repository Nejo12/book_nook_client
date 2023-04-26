import { Book } from '../../types/types';
import * as types from '../constants';

// FETCH BOOKS
export const fetchBooksRequest = () => {
  return {
    type: types.FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = (data: Book[]) => {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};

export const fetchBooksError = (error: unknown) => {
  return {
    type: types.FETCH_BOOKS_ERROR,
    payload: error,
  };
};

// FETCH BOOK DETAIL
export const fetchBookDetail = (bookId: string) => {
  return {
    type: types.FETCH_BOOK_DETAIL,
    payload: bookId,
  };
};

export const fetchBookDetailSuccess = (data: Book) => {
  return {
    type: types.FETCH_BOOK_DETAIL_SUCCESS,
    payload: data,
  };
};

export const fetchBookDetailFailure = (error: unknown) => {
  return {
    type: types.FETCH_BOOK_DETAIL_FAILURE,
    payload: error,
  };
};
