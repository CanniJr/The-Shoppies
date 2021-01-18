import React from 'react'
import Movie from './Movie'
import './CSS/SearchResult.css'

function SearchResult({ clickHandler, searchVal, movies }) {

    // user input will return each search results in <li> tags
    function renderResults() {
        return movies?.map(movie => {
            return <Movie clickHandler={clickHandler} movie={movie} />
        })
    }

    return (
        <div>
            <h5>Results for '{searchVal}'</h5>
            <ul>
                {renderResults()}
            </ul>
        </div>
    )
    
}

export default SearchResult
