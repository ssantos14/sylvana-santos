import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ProjectsList from './Projects';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Skills from './Skills';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/skills' className='nav-item'>Skills</Link>
                    <Link to='/projects' className='nav-item'>Projects</Link>
                    <Link to='/contact' className='nav-item'>Contact</Link>
                </nav>
                <div className='body-container'>
                    <Jumbotron/>
                    <div className='content-container'>
                        <About/>
                        <Skills/>
                        <ProjectsList/>
                        <Contact/>
                    </div>
                    
                </div>
            </div>
        </Router>
    )
};

export default App;