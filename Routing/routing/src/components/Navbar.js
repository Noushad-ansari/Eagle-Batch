import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                {/* <ul className = "menu">
                <li className = "navItem"><a href="/">Home</a></li>
                <li className = "navItem"><a href="about">ABout</a></li>
                <li className = "navItem"><a href="contact">Contact</a></li>
            </ul> */}
                <ul clasName="menu">
                    <NavLink className="navItem" to="/">Home</NavLink>
                    <NavLink  className="navItem" to="about">about</NavLink>
                    <NavLink className="navItem" to="contact"  >Contact</NavLink>
                    <NavLink className="navItem" to="product"  >Product</NavLink>
                </ul>
            </nav>
        </div>
    )
}
