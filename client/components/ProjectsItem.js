import React from 'react';

const ProjectsItem = (props) => {
    return (
        <div className='project-item'>
            <p className='project-title'>{props.project.name}</p>
            <p className='project-description'>{props.project.description}</p>
        </div>
    )
}

export default ProjectsItem;