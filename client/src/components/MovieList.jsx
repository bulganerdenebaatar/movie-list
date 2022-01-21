import React from 'react';
import ListItem from './ListItem.jsx';

const MovieList = (props) => (
  <ul>
    {props.movies.map((movie, i) => <ListItem movie={movie.title} key={i}/>)}
  </ul>

);

export default MovieList;