import React, {useState} from 'react'


const NavLinks = () => {

    const [navLinks, setnavLinks] = useState([
        {
            id: 1,
            title: 'About',
            underlined: true,
        },
        {
            id: 2,
            title: 'Portfolio',
            underlined: false
        },
        {
            id: 3,
            title: 'Resume',
            underlined: false,
        },
        {
            id: 4,
            title: 'Contact',
            underlined: false,
        },
        {
            id: 5,
            title: 'Now',
            underlined: false,
        }
    ])

    const toggleUnderline = (id) => {
    // Toggles 'underline' property of chosen navlink item to true. Sets all others to false
        setnavLinks(navLinks.map((link) => link.id === id ? { ...link, underlined: true} : { ...link, underlined: false }))
    }

    return (
        <ul class="navbar-nav ms-auto">
            {/* Make list of HTML of each navbar item */}
            {navLinks.map((link) => 
            ( <li class="nav-item" onClick={() => toggleUnderline(link.id)}>
            {/* Use conditional to evaluate if id.underlined === true. If so add underline tag. If not, no underline */}    
              <a class="nav-link active" aria-current="page" href="#">{(link.underlined ? <u>{link.title}</u>: `${link.title}` )}</a>
              </li> )
            )}
        </ul>
    )
}

export default NavLinks
