import * as types from '../constants';
import { ActionTypes, AuthState, UserResponse } from '../../types/types';

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  errors: {},
  msg: '',
  user: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  },
};

const authReducer = (state = initialState, action: ActionTypes) => {
  const payload = action.payload as UserResponse;
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: false,
      };

    case types.REGISTER_USER_SUCCESS:
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        isAuthenticated: true,
        msg: null,
        errors: false,
      };

    case types.REGISTER_USER_ERROR:
    case types.LOGIN_USER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        errors: payload.error,
        isAuthenticated: false,
        msg: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
