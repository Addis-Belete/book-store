/* eslint-disable array-callback-return */
import React from 'react';

const category = ['All', ' Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
  <select name="filter" id="filter">
    {category.map((cat) => ((
      <option key={cat} value={cat}>{cat}</option>
    )))}

  </select>
);
export default CategoryFilter;
