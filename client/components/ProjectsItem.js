import React from 'react';

const ProjectsItem = (props) => {
    const projectStyle = {
        backgroundImage: `linear-gradient(${props.project.color}, ${props.project.color}), url(${props.project.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='project-item' style={projectStyle}>
            <div className='project-content'>
                <p className='project-title'>{props.project.name}</p>
                <p className='project-description'>Description: {props.project.description}</p>
                <ul>
                    {
                        props.project.contributions.map((contribution, index) => <li key={index}>{contribution}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectsItem;