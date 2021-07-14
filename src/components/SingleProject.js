import React from 'react'
import { Link } from 'react-router-dom'

const SingleProject = ( {title, info, imgLink, deployLink} ) => {
    
    

    return (
        <div >
            <h1> {title} </h1>
            <div id='singleProjectContainer'>
                <div id='singleProjectImg'>
                    <img src={`/images/${imgLink}.png`} alt={`${title} application screenshot`}></img>
                </div>
                <div id='singleProjectInfo'>
                    <div>{info}</div>
                    <br></br>
                    <div id='projectLinks'>
                        <a href={deployLink}><p>View Live</p></a>
                        <p>View Github</p>
                        <Link to='/Portfolio'><p> Back to Portfolio Page </p></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleProject
