import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelector('.navbar-items');
const listItems = document.querySelectorAll('.list-items');
const links = document.querySelectorAll('.links');

function Navbar() {

    const toggleMenu = () => {
        navbar.classList.toggle('active');
        navbarItems.classList.toggle('active');
        listItems.forEach((e) => {
            e.classList.toggle('active');
        });
        links.forEach((e) => {
            e.classList.toggle('active');
        });
    }

    return (
        <>
            <div className="navbar">
                <li className='ham' onClick={toggleMenu}><i className="fa-solid fa-bars" ></i></li>
                <div className="navbar-items  ">
                    <li className='list-items'><Link className='links' to="/">Home</Link></li>
                    <li className='list-items'><Link className='links' to="/world">World</Link></li>
                    <li className='list-items'><Link className='links' to="/business">Business</Link></li>
                    <li className='list-items'><Link className='links' to="/sports">Sports</Link></li>
                    <li className='list-items'><Link className='links' to="/technology">Technology</Link></li>
                    <li className='list-items'><Link className='links' to="/science">Science</Link></li>
                    <li className='list-items'><Link className='links' to="/entertainment">Entertainment</Link></li>
                    <li className='list-items'><Link className='links' to="/health">Health</Link></li>
                </div>

            </div>
        </>
    )
}

export default Navbar
