import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ProjectsList from './ProjectsList';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/projects' className='nav-item'>Projects</Link>
                    <Link to='/contact' className='nav-item'>Contact</Link>
                </nav>
                <div className='body-container'>
                    <Jumbotron/>
                    <About/>
                    <ProjectsList/>
                    <Contact/>
                </div>
            </div>
        </Router>
    )
};

export default App;