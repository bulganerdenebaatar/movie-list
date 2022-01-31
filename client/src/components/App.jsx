import React from 'react';
import Header from './Header.jsx';
import MovieList from './MovieList.jsx';
import AddForm from './AddForm.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movies: []
      // [{title: 'Mean Girls'},
      // {title: 'Hackers'},
      // {title: 'The Grey'},
      // {title: 'Sunshine'},
      // {title: 'Ex Machina'}],
    }
    this.addMovie = this.addMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    console.log('this.state.movies',this.state.movies)
  }
  // in parent, methods here are going to implement what these methods are gonna do with the given parameter
  componentDidMount() {
    axios({
      method: 'get',
      url:'/api/movies'
    })
      .then(function (response) {
        console.log(response.data)
        this.setState({
          movies:response.data
      });
    })
  }

  addMovie(movie) {
    // event.preventDefault(); // preventing to refresh
    console.log('app', movie)
     // create copy of movies array - add new movie to movies array set state of movies to movies arr
     const newMovies = [...this.state.movies, movie] // copy of movies array and add movie
    //  newMovies.push(movie) dont need because movie is added on line 28
     this.setState({movies: newMovies});
  }
  searchMovie(movie) {
    // event.preventDefault(); not needed here, app doesnt care what happens on child method
    console.log('app', movie)
    const search = movie.title;
    this.setState({ search }); //destructuring movietitle

  }
  render() {
    const movies = this.state.search ? this.state.movies.filter(movie => movie.title === this.state.search) : this.state.movies;
    return (
      <>
        <Header />
        <AddForm addMovie={this.addMovie}/>
        <Search searchMovie={this.searchMovie}/>
        <MovieList movies={movies} />
      </>
    )
  }
};

export default App;


// const movies = [] creating filtered list based on search term
  // if (there is a search term, if found) movies filter by search
  // else movies = this.state.movies

