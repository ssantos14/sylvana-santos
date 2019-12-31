import React from 'react';
import {connect} from 'react-redux';
import {getSkills} from '../redux/skills';
import SkillsItem from './SkillsItem';

class Skills extends React.Component {
    componentDidMount () {
        this.props.getSkills()
    }

    render () {
        return (
            <div className='skills-container'>
                <p className='skills-title'>Skills</p>
                <div className='skills-list'>
                    {this.props.skills.map(skill => <SkillsItem key={skill.id} skill={skill}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skills: state.skills
})

const mapDispatchToProps = (dispatch) => ({
    getSkills: () => dispatch(getSkills())
})

const connectedSkills = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default connectedSkills;