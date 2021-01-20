import React from 'react'
import './CSS/Movie.css'

const Movie = ({ movie, clickHandler }) => {
    
    function handleClick() {
        clickHandler(movie)
    }

    return (
        <div className='movie'>
            <li>{movie.Title}, {movie.Year}</li>
            <button onClick={handleClick}>Nominate</button>
        </div>
    )
}

export default Movie
