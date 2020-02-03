import React from 'react';
import {connect} from 'react-redux';
import {getProjects} from '../redux/projects';
import ProjectsItem from './ProjectsItem';
import Slider from 'infinite-react-carousel';

class ProjectsList extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const settings = {
            className: 'slider',
            arrows: false, 
            dots: true,
            autoplay: true,
            autoplaySpeed: 8000
        };
        return (
            <div className='projects-container' id={this.props.id}>
                {
                    this.props.projects.length === 0 ? null :
                    <Slider {...settings}>
                        {
                            this.props.projects.map(project => <ProjectsItem key={project.id} project={project}/>)
                        }
                    </Slider> 
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
