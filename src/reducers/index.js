/* eslint-disable import/extensions */
import { combineReducers, createStore } from 'redux';
import bookReducer from './Books.js';

const rootReducer = combineReducers({
  bookReducer,
});

const store = createStore(rootReducer);
export default store;
