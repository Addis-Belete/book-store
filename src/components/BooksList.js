import React from 'react';
import { connect } from 'react-redux';

const BookList = () => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>

    </tr>

  </table>
);

export default connect()(BookList);
