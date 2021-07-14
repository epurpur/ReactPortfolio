import React from 'react'

const SingleProject = ( {title, info, imgLink, deployLink} ) => {
    
    

    return (
        <div id='singleProjectPage'>
            <img id='headerImg' src={`/images/${imgLink}.png`} alt={`${title} application screenshot`}></img>
            <div id='SingleProjectText'>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SingleProject
