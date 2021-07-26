/* eslint-disable consistent-return */
import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [{
    id: Math.floor(Math.random() * 30),
    title: 'Dertogada',
    category: 'Fiction',
  },
  {
    id: Math.floor(Math.random() * 30),
    title: 'React-redux',
    category: 'Learning',

  },

  ],
};

const bookReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case CREATE_BOOK:
      result = [...state, action.book];
      return result;

    case REMOVE_BOOK:
      result = state.slice(0, state.findIndex((ele) => ele.Id === action.book))
        .concat(state.slice(state.findIndex((ele) => ele.Id === action.book) + 1, state.length));
      return result;
    default:
      return state;
  }
};

export default bookReducer;
