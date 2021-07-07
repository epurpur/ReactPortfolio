import React from 'react'

const NavLinks = () => {
    const [navLinks, setnavLinks] = useState()[
        {
          id: 1,
          name: 'About',
          underlined: true,
        },
        {
          id: 2,
          name: 'Portfolio',
          underlined: false,
        },
        {
          id: 3,
          name: 'Resume',
          underlined: false,
        },
        {
          id: 4,
          name: 'Contact',
          underlined: false,
        },
        {
          id: 5,
          name: 'Now',
          underlined: false,
        }
      ]}

    return (
        <div>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><u>About</u></a>
            </li>
            <li class="nav-item">
            <a class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Resume</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Now</a>
            </li>
        </div>
    )
}

export default NavLinks
