import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { movies } from './movies.js';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';




const App = () => {
  return ( 
    <div className="movies">
      {movies.map((movie) => 
        <Movie
          key={movie.id}
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