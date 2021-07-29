import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './Navbar';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
