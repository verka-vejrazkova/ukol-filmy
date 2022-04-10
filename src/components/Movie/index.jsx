import React from 'react';
import movies from '../../movies';
import './style.css';

const movies = [];


const Movie = () => {

    return (
        <>
        {movies.map(
            movie =>
            <Movie
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
            director={movie.director}
            genere={movie.genere}


            


       
        />
    )}
    </>

           )       ;

        }

export default Movie;