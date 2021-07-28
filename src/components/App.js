import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div className="App">
    <BooksForm />
    <CategoryFilter />
    <BooksList />
  </div>
);

export default App;
