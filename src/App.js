import React from 'react'
import Header from './Header'
import Nominations from './Nominations'
import Search from './Search'
import SearchResult from './SearchResult'
  
// process.env.REACT_APP_OMDB_KEY

const url = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_OMDB_KEY}&type=movie&s=`
class App extends React.Component{
  state = {
    searchVal: '',
    error: '',
    movies: [],
    nominations: []
    
  }

  // Sets the searchVal state and calls the fetchResults function
  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ searchVal: e.target.value })
    this.fetchResults(e.target.value)
  }


  // Fetch as a callback function for search results
  fetchResults = (input) => {
      fetch(url + input)
          .then(resp => resp.json())
          .then(results => {
            this.renderResult(results)
          })
    .catch(console.error())
  }


  renderResult = (movResults) => {
    movResults.Error ?
      this.setState({
        error: movResults.Error,
        movies: null
      })
      : this.setState({
        error: null,
        movies: movResults['Search']
      })
  }

  addToNomination = (nomination) => {
    let newArray = [...this.state.nominations]
    newArray.push(nomination)
    this.setState({
      nominations: newArray
    })
  }

  removeFromNomination = (nomination) => {
    let newArray = [...this.state.nominations]
    let index = ////
  }

  render() {
    
      return (
        <div className="app">
          {console.log(this.state.movies)}
          <Header />
          <Search changeHandler={this.changeHandler} searchVal={this.state.searchVal} error={this.state.error}/>
          <SearchResult movies={this.state.movies} searchVal={this.state.searchVal} clickHandler={this.addToNomination} />
          <Nominations nominations={ this.state.nominations } clickHandler={this.removeFromNomination} />
        </div>
      );
  }

}

export default App;
