import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookState from './book';
import authState from './auth';
import userState from './user';
import borrowState from './borrow';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookState', 'authState', 'userState', 'borrowState'],
};

const rootReducer = combineReducers({
  bookState,
  authState,
  userState,
  borrowState,
});

export default persistReducer(persistConfig, rootReducer);
