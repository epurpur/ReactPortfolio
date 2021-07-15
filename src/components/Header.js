import React from 'react'
import { Link } from 'react-router-dom'

import NavLinks from './NavLinks'

const Header = () => {


    return (
    <header>   
        <nav>
            <Link to="/" id='myName'>Erich Purpur</Link>
            <div id="navItems">
                <NavLinks />
            </div>
        </nav>
    </header>
    )
}

export default Header
