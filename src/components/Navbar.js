import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div className="nav">
    <div className="nav-one">
      <h1>BookStore CMS</h1>
      <p>BOOK</p>
      <p>CATEGORY</p>
    </div>
    <div className="user-icon">

      <FontAwesomeIcon icon={faUser} className="icon" />
    </div>
  </div>

);
export default NavBar;
