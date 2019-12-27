import React from 'react';
import {connect} from 'react-redux';
import {getProjects} from '../redux/projects';
import ProjectsItem from './ProjectsItem';

class ProjectsList extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        return (
            <div className='projects-container'>
                {
                    this.props.projects.map(project => <ProjectsItem key={project.id} project={project}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
    getProjects: () => dispatch(getProjects())
})

const connectedProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectsList);

export default connectedProjectsList;
