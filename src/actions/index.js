const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book: {
    id: Math.floor(Math.random() * 30),
    title: book.title,
    category: book.category,
  },

});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,

});

export {
  createBook, removeBook, CREATE_BOOK, REMOVE_BOOK,
};
