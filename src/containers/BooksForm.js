/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const BooksForm = () => {
  const [setBook] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    if (e.target.id === ' book-tilt') {
      setBook({
        title: e.target.innerText,
      });
    } else if (e.target.id === 'book-category') {
      setBook({
        category: e.target.innerText,

      });
    }
  };

  const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="book-form">
      <input type="text" id="book-title" placeholder="Add title" onChange={(e) => handleChange(e.target.innerText)} />
      <select name="Book-Category" id="select">
        {bookCategory.map((x, i) => (
          <option key={i}>{x}</option>
        ))}

      </select>

      <button type="submit">Add Book</button>
    </div>
  );
};

export default BooksForm;
