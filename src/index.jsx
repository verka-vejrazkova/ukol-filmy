import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Header from './Header';
import movies from './movies';

const App = () => {
  return (
  <>
    {
      movies.map(
        movieObject => <Movie 
                         title={movieObject.title}
                         poster={movieObject.poster}
                         year={movieObject.year}
                         rating={movieObject.rating}
                         director={movieObject.director}
                         genre={movieObject.genre}
                         cast={movieObject.cast}
                         />
      )

    }
  </>
);

2