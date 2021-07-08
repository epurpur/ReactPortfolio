import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks'

const Header = () => {


    return (
    <header>   
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/" id='myName'>Erich Purpur</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <NavLinks />
            </div>
        </div>
        </nav>
    </header>
    )
}

export default Header
