import React from 'react'
import Header from './Header'
import MovieSearch from './MovieSearch'
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

  render() {
    
      return (
        <div className="app">
          {console.log(this.state.movies)}
          <Header />
          <MovieSearch changeHandler={this.changeHandler} searchVal={this.state.searchVal}/>
          <SearchResult movies={this.state.movies}/>
        </div>
      );
  }

}

export default App;
