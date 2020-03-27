import React from 'react';

const ProjectsItem = (props) => {
    const projectStyle = {
        backgroundImage: `linear-gradient(to bottom, ${props.project.color}), url(${props.project.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '4px 0 0 4px',
    }
    return (
        <div className='project-item'>
            <div className='project-content'>
                <div className="project-image" style={projectStyle}/>
                <div className='project-description'>
                    <div className='project-title-container'>
                        <p className='project-title'>{props.project.name}</p>
                    </div>
                    <p className='project-text'>Description: {props.project.description}</p>
                    <p className='project-text'>Contributions:</p>
                    <ul className='project-text'>
                        {
                            props.project.contributions.map((contribution, index) => <li key={index}>{contribution}</li>)
                        }
                    </ul>
                    <p className='project-text'>Technologies: {props.project.technologies}</p>
                    <a className='project-link' href={props.project.link}>View</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsItem;