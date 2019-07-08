import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searcher from './Components/Searcher';
import Recipe from './Components/Recipe';
import axios from 'axios'

const API_KEY = `${process.env.REACT_APP_RECIPE_API_KEY}`

class App extends React.Component {
  state = {
    search: '',
    recipe: null,
  }

  
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    let newRecipe = await axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.state.search}`)

    this.setState({recipe: newRecipe.data})
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
