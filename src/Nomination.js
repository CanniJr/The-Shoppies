import React from 'react'
import './CSS/Nomination.css'

const Nomination = ({removeNomination, nominee}) => {

    function clickHandle() {
        removeNomination(nominee.imdbID)
    }

    return (
        <div className='nominee'>
            <li>{nominee.Title}, {nominee.Year}</li>
            <button onClick={clickHandle}>Remove</button>
        </div>
    )
}

export default Nomination
