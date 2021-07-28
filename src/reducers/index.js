/* eslint-disable import/extensions */
import { combineReducers, createStore } from 'redux';
import bookReducer from './Books.js';
import filterReducer from './filter.js';

const rootReducer = combineReducers({
  bookReducer,
  filterReducer,
});

const store = createStore(rootReducer);
export default store;
