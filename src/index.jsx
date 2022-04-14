import React from 'react';
import { render } from 'react-dom';
import './style.css';
import movies from '../../movies';

import Header from './components/Header';
import MovieList from './components/MovieList';


const App = () => (
    <>
      <Header text="V našem kině právě uvádíme"/>
      <MovieList movies={movies}/>
    </>

      );
      
  render(<App />, document.querySelector('#app'));