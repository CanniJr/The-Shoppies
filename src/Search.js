import React, { useState } from 'react'
import './CSS/Search.css'
import SearchIcon from '@material-ui/icons/Search';


function MovieSearch(props) {


    return (
        <div className='search'>
            <h3>Movie Title</h3>
            <form>
                <SearchIcon/>
                <input type='text' value={props.searchVal} onChange={props.changeHandler} placeholder='Search...' />
            </form>
            {props.searchVal === '' ? null :
                <small>{props.error}</small>
            }
        </div>
    )
}

export default MovieSearch
