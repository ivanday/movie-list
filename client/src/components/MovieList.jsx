import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies, setMovies}) => {
  return (
    <div>
      {movies.map(item => {
        return <MovieListEntry movie = {item}/>
      })}
    </div>)
};

export default MovieList;