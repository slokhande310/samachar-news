import React from 'react'
import '../styles/Spinner.css'
import NewSpinner from '../img/Spinner.gif'

function Spinner() {
    return (
        <>
            <div className="spinner">
                <img src={NewSpinner} alt="..." />
            </div>
        </>
    )
}

export default Spinner
