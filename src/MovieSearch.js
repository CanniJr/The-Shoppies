import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';


function MovieSearch(props) {
    const [formInput, setFormInput] = useState('')

    function changeHandler(e) {
        setFormInput(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        console.log(formInput)
        props.appSubmitHandler(formInput)
        setFormInput('')
    }

    return (
        <div className='search'>
            <h3>Movie Title</h3>
            <form onSubmit={submitHandler}>
                <SearchIcon/>
                <input type='text' value={formInput} onChange={changeHandler} />
                <input type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default MovieSearch
