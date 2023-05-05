import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  getBorrowSuccess,
  borrowBookFailure,
  returnBookFailure,
  getBorrowFailure,
} from '../actions/borrow';
import { GET_BORROW, BORROW_BOOK, RETURN_BOOK } from '../constants';
import { AppState, BookActionType, BookResponse } from '../../types/types';
import { url } from '../../Routes';

const id = (state: AppState) => state.bookState.bookProps._id;

function* borrowedSaga(action: BookActionType) {
  try {
    const userId = action.payload as string;
    const response: BookResponse = yield axios.get(
      `${url}/api/borrows/all?userId=` + userId,
    );
    yield put(getBorrowSuccess(response.data));
  } catch (error: any) {
    yield put(getBorrowFailure(error));
  }
}

function* borrowBookSaga(action: any) {
  try {
    const bookData = action.payload;
    yield axios.post(`${url}/api/borrows`, bookData);
  } catch (error: any) {
    yield put(borrowBookFailure(error));
  }
}

function* returnBookSaga(action: any) {
  try {
    const borrowedId = action.payload;
    const bookId: string = yield select(id);
    yield axios.delete(
      `${url}/api/borrows/delete/` + bookId + '/' + borrowedId,
    );
  } catch (error: any) {
    yield put(returnBookFailure(error));
  }
}

const borrowSagaArray = [
  takeLatest(GET_BORROW, borrowedSaga),
  takeLatest(BORROW_BOOK, borrowBookSaga),
  takeLatest(RETURN_BOOK, returnBookSaga),
];

export default borrowSagaArray;
