import React from 'react'
import { Link } from 'react-router-dom'

const SingleProject = ( {title, info, imgLink, deployLink, githubLink} ) => {
    

    return (
        <div >
            <h1> {title} </h1>
            <div id='singleProjectContainer'>
                <div id='singleProjectImg'>
                    <img src={`/images/${imgLink}.png`} alt={`${title} application screenshot`}></img>
                </div>
                <div id='singleProjectInfo'>
                    {/* reads text from 'info' item which contains HTML. This is translated into HTML by the dangerouslySetInnerHTML attribute */}
                    <div id='singleProjectText' dangerouslySetInnerHTML={{__html: info}}></div>
                    <br></br>
                    <div id='projectLinks'>
                        <a href={deployLink} target="_blank"><p>View Live</p></a>
                        <a href={githubLink} target="_blank"><p>View Github</p></a>
                        <Link to='/Portfolio'><p> Back to Portfolio Page </p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
