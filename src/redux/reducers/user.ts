import * as types from '../constants';
import { ActionTypes, UserState } from '../../types/types';

const initialState: UserState = {
  userList: [],
  loading: false,
  errors: false,
};

const userReducer = (state = initialState, action: ActionTypes) => {
  const payload = action.payload;
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        loading: true,
        errors: false,
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        userList: payload,
      };

    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        errors: true,
      };

    default:
      return state;
  }
};

export default userReducer;
