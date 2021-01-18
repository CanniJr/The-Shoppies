import React from 'react'
import './CSS/Movie.css'

function Movie({movie, clickHandler}) {
    return (
        <div className='movie'>
            <li>{movie.Title}, {movie.Year}</li>
            <button onClick={clickHandler}>Nominate</button>
        </div>
    )
}

export default Movie
