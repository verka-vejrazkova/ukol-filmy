import React from 'react';
import { render } from 'react-dom';
import './style.css';


import camera from './Header/img/camera.svg'


import Header from './Header';
import movies from './movies';

const App = () => {
  return (
  <>

    <Header image={camera}/>
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
  }