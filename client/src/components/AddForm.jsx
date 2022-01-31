import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) { // value/input is handled by this because this is controlled form
    this.setState({value: event.target.value}); // changing/setting state of value to be the w.e is inputted
  }
  onSubmit(event) {
    event.preventDefault();
    var title = this.state.value; // assgning title to be the state.value that's been changed from handleChange
    this.props.postDataOnServer({title}); // passing the title to addMovie in App
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder = {"Add movie title here"} value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
    </form>
    )
  }
};

//make copy, add new array, and setstate of that new array
// react state is immutable

export default AddForm;