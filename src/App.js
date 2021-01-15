import React from 'react'
import Header from './Header'
import MovieSearch from './MovieSearch'
import SearchResult from './SearchResult'
  
// process.env.REACT_APP_OMDB_KEY

class App extends React.Component{
  state = {
    searchVal: '',
    movies: []
    
  }
  
  componentDidMount() {
      const url = `https://www.omdbapi.com/?t=${this.state.searchVal}&apikey=${process.env.REACT_APP_OMDB_KEY}`
    
      fetch(url)
          .then(resp => resp.json())
          .then(data => {
              this.setState({ movies: data })
          })
  }

  
  appSubmitHandler = (formInput) => {
    this.setState({ searchVal: formInput })
  }

  render() {
    
      return (
        <div className="app">
          {console.log(this.state.movies)}
          <Header />
          <MovieSearch appSubmitHandler={this.appSubmitHandler}/>
          <SearchResult formValue={this.state.searchVal}/>
        </div>
      );
  }

}

export default App;
