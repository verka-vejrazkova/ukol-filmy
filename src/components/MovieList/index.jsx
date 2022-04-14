import React from 'react';
import './style.css';
import movies from '../../movies';
import Movie from '../Movie';




const MovieList = ({movies})=> {
  <div className="movie">
    Dnes hrajeme
    { movies.map((movie) =>  {
        return <Movie
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre} 
        />
      }

    )

    }


  </div>
};


export default MovieList;