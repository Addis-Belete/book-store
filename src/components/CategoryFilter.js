/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';

const category = ['All', ' Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleChange }) => (
  <form id="filter">
    <label htmlFor="filter">Filter By Category</label>
    <br />

    <select name="filter" id="fil" onChange={handleChange}>
      {category.map((cat) => ((
        <option key={cat} value={cat}>{cat}</option>
      )))}

    </select>
  </form>
);
export default CategoryFilter;
