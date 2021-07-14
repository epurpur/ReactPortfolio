import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

/**
* returns HTML for each active project
* Uses project.imgLink for the URL to endpoint of SingleProject component
*     - all routes are defined in App.js component
*     - 
* passes project information as prop to be rendered in SingleProject component
*/
    return (
        <div className="card">
            <img class="image" id="portfolioCard" src={`/images/${props.imgLink}.png`} alt={`${props.title} application screenshot`}></img>
            <Link to={`/${props.imgLink}`}>
              <div class="overlay">
                <div class="text">{props.title}</div>
              </div>
            </Link>
        </div>
    )
}

export default ProjectCard
