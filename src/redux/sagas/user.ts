import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUsersSuccess, fetchUsersFailure } from '../actions/user';
import { fetchUserService } from '../services/user';
import { FETCH_USERS } from '../constants';
import { UserState } from '../../types/types';

function* fetchUserSaga() {
  try {
    const response: UserState = yield call(fetchUserService);
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

const userSagaArray = [takeLatest(FETCH_USERS, fetchUserSaga)];

export default userSagaArray;
