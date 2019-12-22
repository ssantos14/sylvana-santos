import React from 'react';
import {connect} from 'react-redux';
import {getSkills} from '../redux/skills';

class About extends React.Component {
    componentDidMount () {
        this.props.getSkills()
    }

    render () {
        return (
            <div className='about-container'>
                <p>These are my skills:</p>
                <img src={'/images/js.png'}/>
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