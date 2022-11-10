import React from 'react';

var MovieListEntry = ({movie}) => {
  return (
    <div>
      <div>{movie.title}</div>
      <input type='button' value = 'false' onClick = {(event) => {
        if (movie.watched) {
          movie.watched = false;
          event.target.value = 'false'
        } else {
          movie.watched = true;
          event.target.value = 'true';
        }
        console.log(movie.watched);
      }}></input>
    </div>

  );
}

export default MovieListEntry;

