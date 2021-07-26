import React from 'react';
import { connect } from 'react-redux';

import Book from '../components/Book';

const BookList = () => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>

      </tr>
    </thead>
    <Book />

  </table>
);

export default connect(
)(BookList);
