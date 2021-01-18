import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';


function MovieSearch(props) {


    return (
        <div className='search'>
            <h3>Movie Title</h3>
            <form>
                <SearchIcon/>
                <input type='text' value={props.searchVal} onChange={props.changeHandler} placeholder='Search...'/>
            </form>
        </div>
    )
}

export default MovieSearch
