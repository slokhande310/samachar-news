import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-items">
                    <li><a className='active' href="/">Home</a></li>
                    <li><a className='' href="/world">World</a></li>
                    <li><a className='' href="/business">Business</a></li>
                    <li><a className='' href="/sports">Sports</a></li>
                    <li><a className='' href="/technology">Technology</a></li>
                    <li><a className='' href="/Science">Science</a></li>
                    <li><a className='' href="/entertainment">Entertainment and Arts</a></li>
                    <li><a className='' href="/health">Health</a></li>
                </div>
            </div>
        </>
    )
}

export default Navbar
