import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-items">
                    <li className='ham'><i class="fa-solid fa-bars"></i></li>
                    <li className='list-items'><Link className='' to="/">Home</Link></li>
                    <li className='list-items'><Link className='' to="/world">World</Link></li>
                    <li className='list-items'><Link className='' to="/business">Business</Link></li>
                    <li className='list-items'><Link className='' to="/sports">Sports</Link></li>
                    <li className='list-items'><Link className='' to="/technology">Technology</Link></li>
                    <li className='list-items'><Link className='' to="/science">Science</Link></li>
                    <li className='list-items'><Link className='' to="/entertainment">Entertainment</Link></li>
                    <li className='list-items'><Link className='' to="/health">Health</Link></li>
                </div>

            </div>
        </>
    )
}

export default Navbar
