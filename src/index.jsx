import React from 'react';
import { render } from 'react-dom';
import './style.css';
import movies from './movies.js';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';

import movies from './movies';




const App = () => {
  return ( 
    <>
      <Header text="V našem kině právě uvádíme"/>
      <MovieList movies={movies}/>
    </>

      );
      
  };

  render(<App />, document.querySelector('#app'));