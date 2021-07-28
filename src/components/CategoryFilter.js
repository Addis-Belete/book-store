/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

const category = ['All', ' Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleChange }) => (
  <form id="filter">
    <label>
      Filter By Category
      <br />

      <select name="filter" id="fil" onChange={handleChange}>
        {category.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}

      </select>
    </label>
  </form>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,

};
export default CategoryFilter;
