import React from 'react'

const SingleProject = ( {title, info, imgLink, deployLink} ) => {
    
    

    return (
        <div>
            <p>{title}</p>
            <p>{info}</p>
            <p>{imgLink}</p>
            <p>{deployLink}</p>

            This is my project.
        </div>
    )
}

export default SingleProject
