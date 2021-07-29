import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [{
    id: Math.floor(Math.random() * 101),
    title: 'Dertogada',
    category: 'Fiction',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'React-redux',
    category: 'Learning',

  },

  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default bookReducer;
