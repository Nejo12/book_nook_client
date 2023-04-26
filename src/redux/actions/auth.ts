import { User } from '../../types/types';
import * as types from '../constants';

/**
|--------------------------------------------------
| Register a new user
|--------------------------------------------------
*/
export const registerUserRequest = (user: User) => {
  return {
    type: types.REGISTER_USER_REQUEST,
    payload: user,
  };
};

export const registerUserSuccess = (result: any) => {
  return {
    type: types.REGISTER_USER_SUCCESS,
    payload: result,
  };
};

export const registerUserError = (errors: any) => {
  return {
    type: types.REGISTER_USER_ERROR,
    payload: errors,
  };
};

/**
|--------------------------------------------------
| Login a registered user
|--------------------------------------------------
*/
export const loginUserRequest = (userData: any) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    payload: userData,
  };
};

export const loginUserSuccess = (decoded: any) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: decoded,
  };
};

export const loginUserError = (errors: any) => {
  return {
    type: types.LOGIN_USER_ERROR,
    payload: errors,
  };
};
