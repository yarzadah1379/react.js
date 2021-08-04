import React from 'react'
import {NavLink, Link} from 'react-router-dom'
const Navbar =({togglesSidebar})=>(
    <nav className='navbar'>
        <ul className='navbar__list'>

          
            <li className='navbar__list__item'>
                <NavLink className='navbar__link' to='/'>
                    Login
                </NavLink>
            </li>

            <li className='navbar__list__item'>
                <NavLink className='navbar__link' to='/signup'>
                    SignUp
                </NavLink>
            </li>
           
        </ul>
    </nav>
)
export default Navbar;