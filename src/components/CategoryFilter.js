/* eslint-disable array-callback-return */
import React from 'react';

const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
  <select name="filter" id="filter">
    {category.map((cat) => ((
      <option value="all">All</option>,
        <option value={cat}>{cat}</option>
    )))}

  </select>
);
export default CategoryFilter;
