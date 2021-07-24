import { combineReducers, createStore } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  bookReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());
