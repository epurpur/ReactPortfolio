import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Portfolio = ( {projects} ) => {

      const returnActiveProjects = () => {
        // gets all projects from project state. Filters out those with property active: true. Creates HTML for those projects to render in front end
  
        // filters out only those projects which have a property of active: true
        const activeProjects = projects.filter((project) => project.active)
        
        // return a ProjectCard and pass all info into that as props
        return activeProjects.map((project) => 
        (
          <ProjectCard 
            id={project.id}
            title={project.title}
            info={project.info}
            imgLink={project.imgLink}
            deployLink={project.deployLink}
             />
        ))
      } 

    return (
        <div>
            <h1> Work Portfolio </h1>
            <div id="portfolioCardsHolder">
              {returnActiveProjects()}
            </div>
        </div>
    )
}

export default Portfolio
