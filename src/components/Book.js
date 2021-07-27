/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ books }) => (
  <tbody>
    {books.map((book) => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>
        <th><button type="button" className="btn">X</button></th>

      </tr>

    ))}

  </tbody>

);

export default Book;
