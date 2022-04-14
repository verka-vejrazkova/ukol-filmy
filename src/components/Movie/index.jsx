import React from 'react';
import './style.css';



const Movie = ({ id, title, poster, year, rating, genre, director }) => {

        return (
                <div className="movie">
                  <h2 className="movie__title">{title}</h2>
                  <img src={poster} alt={title} />
                  <div>
                    <p>{id}</p>
                    <p>Ročník: {year}</p>
                    <p>Hodnocení: {rating}</p>
                    <p>Žánr: {genre}</p>
                    <p>Režisér: {director}</p>
                  </div>
                </div>
              );

        }

export default Movie;