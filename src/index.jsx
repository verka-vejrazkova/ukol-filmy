import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import { movies } from '../src/movies.js';




const App = () => {
  return ( 
    <div className="movies">
      {movies.map((movie) => 
        <Movie
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre} 
        />
      )}
      </div>

      );
      
  };

  render(<App />, document.querySelector('#app'));