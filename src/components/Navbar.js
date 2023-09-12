import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-items">
                    <li><Link className='' to="/">Home</Link></li>
                    <li><Link className='' to="/world">World</Link></li>
                    <li><Link className='' to="/business">Business</Link></li>
                    <li><Link className='' to="/sports">Sports</Link></li>
                    <li><Link className='' to="/technology">Technology</Link></li>
                    <li><Link className='' to="/science">Science</Link></li>
                    <li><Link className='' to="/entertainment">Entertainment and Arts</Link></li>
                    <li><Link className='' to="/health">Health</Link></li>
                </div>
            </div>
        </>
    )
}

export default Navbar
