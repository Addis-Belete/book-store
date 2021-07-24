/* eslint-disable no-plusplus */
let nextBookId = 0;
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: {
    id: ++nextBookId,
    book,
  },

});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: {
    book,
  },

});

export { createBook, removeBook };
