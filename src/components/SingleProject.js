import React from 'react'

const SingleProject = ( {title, info, imgLink, deployLink} ) => {
    
    

    return (
        <div>
            <h1> {title} </h1>
            <div id='singleProjectContainer'>
                <img src={`/images/${imgLink}.png`} alt={`${title} application screenshot`}></img>
            </div>
            <div id='singleProjectInfo'>
                <p>test</p>
            </div>
        </div>
    )
}

export default SingleProject
