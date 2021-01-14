import React from 'react'
import Header from './Header'
import MovieSearch from './MovieSearch'
import SearchResult from './SearchResult'
  
function App() {
  return (
    <div className="app">
      <Header />
      <MovieSearch />
      <SearchResult />
    </div>
  );
}

export default App;
