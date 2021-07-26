/* eslint-disable import/no-named-as-default-member */
import { combineReducers, createStore } from 'redux';
import bookReducer from './Books';

const rootReducer = combineReducers({
  bookReducer,
});

const store = createStore(rootReducer);
export default store;
