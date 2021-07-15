import React from 'react'
import NavLinks from './NavLinks'

const Header = () => {


    return (
    <header>   
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/" id='myName'>Erich Purpur</a>
            <div id="navbarNav">
                <NavLinks />
            </div>
        </div>
        </nav>
    </header>
    )
}

export default Header
