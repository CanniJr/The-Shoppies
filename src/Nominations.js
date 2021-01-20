import React from 'react'
import Nomination from './Nomination'
import './CSS/Nominations.css'

function Nominations({ nominations, clickHandler }) {

    function renderNominations() {
        return nominations.map(nomineeObj =>
            <Nomination
                key={nomineeObj.imdbID}
                nominee={nomineeObj}
                removeNomination={clickHandler} />
        )}
    
    return (
        <div className='nomination'>
            <h5>Nominations</h5>
            <div className='nomination__disp'>
                <ul>
                    {renderNominations()}
                </ul>
            </div>
        </div>
    )
}

export default Nominations
