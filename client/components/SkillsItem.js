import React from 'react';

const SkillsItem = (props) => {
    return (
        <div className='skill-item'>
            <img className='skill-icon' src={props.skill.icon}/>
            <p className='skill-name'>{props.skill.name}</p>
        </div>
    )
}

export default SkillsItem;