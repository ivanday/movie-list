import React from 'react';

var AddMovie = ({movieDatabase, setMovieDatabase, setMovies}) => {
  var movieToAdd = '';
  var handleSubmit = (text) => {
    var movieExists = false;
    movieDatabase.forEach((movie) => {
      if (movie.title === text) {
        movieExists = true;
      }
    });
    if (!movieExists) {
      setMovies([...movieDatabase, {'title': text, 'watched': false}])
      setMovieDatabase([...movieDatabase, {'title': text, watched: false}]);
    }
    console.log(movieDatabase);
  }
  return (
    <div>
      <input type = 'text' onChange = {(evt)=>{movieToAdd = evt.target.value}}></input>
      <input type= 'submit' value = 'add movie' onClick={(evt)=>{handleSubmit(movieToAdd)}}></input>
    </div>

  )
};

export default AddMovie;
