import { put, call, takeLatest } from 'redux-saga/effects';

import {
  registerUserSuccess,
  registerUserError,
  loginUserSuccess,
  loginUserError,
} from '../actions/auth';
import { LOGIN_USER_REQUEST, REGISTER_USER_REQUEST } from '../constants';
import { registerUserService, loginUserService } from '../services/auth';
import { LoginActionType, RegisterActionType, User } from '../../types/types';

function* registerSaga(form: RegisterActionType) {
  const payload = form.payload;
  try {
    const response: User = yield call(registerUserService, payload);
    yield put(registerUserSuccess(response));
  } catch (error: any) {
    yield put(registerUserError(error.response.data));
  }
}

function* loginSaga(form: LoginActionType) {
  const payload = form.payload;
  try {
    const response: User = yield call(loginUserService, payload);
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(loginUserError(error));
  }
}

const authSagaArray = [
  takeLatest(REGISTER_USER_REQUEST, registerSaga),
  takeLatest(LOGIN_USER_REQUEST, loginSaga),
];

export default authSagaArray;
