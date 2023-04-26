import { BookList, BookResponse, Borrow } from '../../types/types';
import * as types from '../constants';

// ALREADY BORROWED BOOK
export const getBorrow = () => {
  return {
    type: types.GET_BORROW,
  };
};

export const getBorrowSuccess = (data: BookList) => {
  return {
    type: types.GET_BORROW_SUCCESS,
    payload: data,
  };
};

export const getBorrowFailure = (errors: any) => {
  return {
    type: types.GET_BORROW_FAILURE,
    payload: errors,
  };
};

// TO BORROW BOOK
export const borrowBook = (bookData: Borrow) => {
  return {
    type: types.BORROW_BOOK,
    payload: bookData,
  };
};

export const borrowBookSuccess = (data: BookResponse) => {
  return {
    type: types.BORROW_BOOK_SUCCESS,
    payload: data,
  };
};

export const borrowBookFailure = (errors: any) => {
  return {
    type: types.BORROW_BOOK_FAILURE,
    payload: errors,
  };
};

// RETURN BORROWED BOOK
export const returnBook = (borrowId: string) => {
  return {
    type: types.RETURN_BOOK,
    payload: borrowId,
  };
};

export const returnBookSuccess = (data: BookList) => {
  return {
    type: types.RETURN_BOOK_SUCCESS,
    payload: data,
  };
};

export const returnBookFailure = (errors: string) => {
  return {
    type: types.RETURN_BOOK_FAILURE,
    payload: errors,
  };
};
