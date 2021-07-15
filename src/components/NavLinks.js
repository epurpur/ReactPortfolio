import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {

    // set state variable for nav Links
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
            title: 'Contact',
            underlined: false,
        },
        {
            id: 4,
            title: 'Now',
            underlined: false,
        }
    ])

    const toggleUnderline = (id) => {
    // Toggles 'underline' property of chosen navlink item to true. Sets all others to false
        setnavLinks(navLinks.map((link) => link.id === id ? { ...link, underlined: true} : { ...link, underlined: false }))
    }

    return (
        <>
            {navLinks.map((link) => 
                (<p className="navLinkItem" key={link.id} onClick={() => toggleUnderline(link.id)}>
                    {/* Use conditional to evaluate if id.underlined === true. If so add underline tag. If not, no underline */}    
                    <Link key={link.id} className="nav-link" aria-current="page" to={link.title} style={{ color: '#F64C72' }}>{(link.underlined ? <u>{link.title}</u>: `${link.title}` )}</Link>
                </p>)
            )}
        </>
    )
}

export default NavLinks
