import { all } from 'redux-saga/effects';

import bookSagas from './book';
import authSagas from './auth';
import userSagas from './user';
import borrowSagas from './borrow';

export default function* rootSaga() {
  yield all([...bookSagas, ...authSagas, ...userSagas, ...borrowSagas]);
}
