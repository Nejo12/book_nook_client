import { ActionTypes, BorrowResponse, BorrowState } from '../../types/types';
import * as types from '../constants';

const initialState: BorrowState = {
  _bookList: [],
  loading: false,
  error: '',
  msg: '',
};

const borrowReducer = (state = initialState, action: ActionTypes) => {
  const payload = action.payload as BorrowResponse;

  switch (action.type) {
    case types.GET_BORROW:
    case types.BORROW_BOOK:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BORROW_SUCCESS:
      return {
        ...state,
        loading: false,
        _bookList: payload,
      };

    case types.BORROW_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload.msg,
      };

    case types.GET_BORROW_FAILURE:
    case types.BORROW_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default borrowReducer;
