import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    // console.log(event.target.value)
  }
  onSubmit(event) {
    event.preventDefault();
    var movie = this.state.value;
    this.props.searchMovie({title: movie});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder = {"Search for a movie"} value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
    </form>
    )
  }
};

export default Search;