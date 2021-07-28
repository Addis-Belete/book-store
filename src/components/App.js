import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <BooksForm />

    <BooksList />
  </div>
);

export default App;
