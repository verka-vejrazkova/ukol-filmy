import React from 'react';
import './style.css';




const MovieList = ({movie}) => {
  
    
  return (
      <>
    {  
        movies.map(
          movieObject => <Movies
                           title={movieObject.title}
                           poster={movieObject.poster}
                           year={movieObject.year}
                           rating={movieObject.rating}
                           director={movieObject.director}
                           genre={movieObject.genre}
                           cast={movieObject.cast}
                           />
        )}  
        </>

  );
  
    }


export default <MovieList></MovieList>;