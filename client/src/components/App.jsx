import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

const App = (props) => {
  const {useState} = React;

  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  var [movieDatabase, setMovieDatabase] = useState(movies);
  var [myMovies, setMovies] = useState(movies);
  var [search, setSearch] = useState('');

  return (
    <div>
      <div><SearchBar
        search = {search}
        setSearch = {setSearch}
        movies = {myMovies}
        setMovies = {setMovies}
        movieDatabase = {movieDatabase}/>
      </div>
      <div><MovieList movies = {myMovies} setMovies = {setMovies}/></div>
    </div>
    );
};

export default App;