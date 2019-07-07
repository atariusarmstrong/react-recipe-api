import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searcher from './Components/Searcher';
import Recipe from './Components/Recipe';

class App extends React.Component {
  state = {
    search: null,
    recipe: null,
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({recipe: this.state.search})
  }
  render() {
    return (
      <div className="App">
        <Searcher 
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Recipe 
          recipe={this.state.recipe}
        />
      </div>
    )
  }

  ;
}

export default App;
