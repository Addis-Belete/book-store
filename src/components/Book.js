/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books, remove }) => (
  <div>
    {books.map((book) => (
      <div className="book-detail">
        <div className="desc">
          <h4>{book.category}</h4>
          <h2>{book.title}</h2>
          <p>Frank Herbert</p>
          <div className="links">
            <p>Comments</p>
            <p><button type="button" className="btn" onClick={() => { remove(book); }}>Remove</button></p>
            <p className="edit">Edit</p>
          </div>
        </div>
        <div>
          <p>Progress bar</p>
        </div>
        <div>
          <h4>CURRENT CHAPTER</h4>
          <p>
            Chapter 3:
            "A Lesson Learned"

          </p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>

    ))}

  </div>

);
Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  remove: PropTypes.func.isRequired,

};
Book.defaultProps = {
  books: [],
};

export default Book;
