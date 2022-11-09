import React from 'react';

var SearchBar = ({search, setSearch, movies, setMovies, movieDatabase}) => {

  var counter = 0;

  var handleSubmit = (searchTerm) => {
    var newMovieList = [];
    if (searchTerm === '') {
      setMovies(movieDatabase);
    } else{
      movies.forEach((movie) => {
        if (movie.title.match(new RegExp(searchTerm, "i"))) {
          console.log(movie.title);
          newMovieList.push({'title': movie.title});
        }
      });

      setMovies(newMovieList);
    }
  }

  return (
    <div>
      <input type = 'text' onChange = {(evt)=>{setSearch(evt.target.value)}}></input>
      <input type= 'submit' onClick={(evt)=>{handleSubmit(search)}}></input>
    </div>
  );
};

export default SearchBar;
