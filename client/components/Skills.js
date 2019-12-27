import React from 'react';
import {connect} from 'react-redux';
import {getSkills} from '../redux/skills';
import SkillsItem from './SkillsItem';

class About extends React.Component {
    componentDidMount () {
        this.props.getSkills()
    }

    render () {
        return (
            <div className='skills-container'>
                {this.props.skills.map(skill => <SkillsItem key={skill.id} skill={skill}/>)}
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

const connectedAbout = connect(mapStateToProps, mapDispatchToProps)(About);

export default connectedAbout;