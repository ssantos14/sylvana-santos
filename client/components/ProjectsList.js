import React from 'react';
import {connect} from 'react-redux';
import {getProjects} from '../redux/projects';

class ProjectsList extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        console.log(this.props.projects)
        return (
            <div>
                {
                    this.props.projects.map(project => <p>{project.name}</p>)
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
