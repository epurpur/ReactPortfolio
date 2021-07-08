import React, { useState } from 'react'

const Portfolio = () => {

    const [projects, setProjects] = useState([
        {
          id: 1,
          title: 'OneFigr App',
          active: true,
        },
        {
          id: 2,
          title: 'EcoValuator Plugin',
          active: true,
        },
        {
          id: 3,
          title: 'Boone Real Estate',
          active: true,
        },
        {
          id: 4,
          title: 'Light Cville',
          active: true,
        },
        {
          id: 5,
          title: 'Is It Dry?',
          active: true,
        },
        {
          id: 6,
          title: 'National Park Finder',
          active: true,
        },
        {
          id: 7,
          title: 'Virginia River Monitor',
          active: false
        }
      ])

    return (
        <div>
            <h1> My Portfolio Page</h1>
        </div>
    )
}

export default Portfolio
