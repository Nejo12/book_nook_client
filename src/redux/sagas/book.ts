import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';

import {
  fetchBooksSuccess,
  fetchBooksError,
  fetchBookDetailSuccess,
  fetchBookDetailFailure,
} from '../actions/book';
import { fetchBooksService } from '../services/books';
import { FETCH_BOOKS_REQUEST, FETCH_BOOK_DETAIL } from '../constants';
import { AppState, Book, BookActionType } from '../../types/types';
import { url } from '../../Routes';

function* fetchBooksSaga() {
  try {
    const response: Book[] = yield call(fetchBooksService);
    yield put(fetchBooksSuccess(response));
  } catch (err) {
    yield put(fetchBooksError(err));
  }
}

const _id = (state: AppState) => state.authState.user._id;

function* fetchBookDetailSaga(action: BookActionType) {
  try {
    const bookId = action.payload as string;
    const userId: string = yield select(_id);

    const noUserIdUrl = `${url}/api/books/${bookId}`;
    const withUserIdUrl = `${url}/api/books/${bookId}?userId=${userId}`;

    const bookDetailsUrl = userId ? withUserIdUrl : noUserIdUrl;
    const response: Book = yield axios.get(bookDetailsUrl);
    yield put(fetchBookDetailSuccess(response));
  } catch (error) {
    yield put(fetchBookDetailFailure(error));
  }
}

const bookSagaArray = [
  takeLatest(FETCH_BOOKS_REQUEST, fetchBooksSaga),
  takeLatest(FETCH_BOOK_DETAIL, fetchBookDetailSaga),
];

export default bookSagaArray;
