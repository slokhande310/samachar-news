import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isActive, setActive] = useState('false');

    const toggleMenu = () => {
        setActive(!isActive)
    };

    return (
        <>
            <div className={`navbar ${isActive ? '' : 'active'}`}>
                <li className='ham' onClick={toggleMenu}><i className="fa-solid fa-bars" ></i></li>
                <div className={`navbar-items ${isActive ? '' : 'active'}`}>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/">Home</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/world">World</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/business">Business</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/sports">Sports</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/technology">Technology</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/science">Science</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/entertainment">Entertainment</Link></li>
                    <li className='list-items'><Link className={`links ${isActive ? '' : 'active'}`} to="/health">Health</Link></li>
                </div>

            </div>
        </>
    )
}

export default Navbar
