import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import movies from '../src/movies.js';


const App = () => {
  return (
  <>  
      <Header/>
      <Movie/>
      <MovieList/>
      
  </>
);
  }

  render(<App />, document.querySelector('#app'));