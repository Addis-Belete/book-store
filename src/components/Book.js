import React from 'react';
import store from '../reducers';

const state = store.getState();
const { books } = state.bookReducer;
const Book = () => (
  <tbody>
    {books.map((book) => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>

      </tr>

    ))}

  </tbody>

);

export default Book;
