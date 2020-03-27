import React from 'react';
import { Link } from "react-scroll";

import ProjectsList from './Projects';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Skills from './Skills';

const App = () => {
    return (
        <div>
            <nav>
                <div className='nav-item'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration= {500}
                    >About</Link>
                </div>
                <div className='nav-item'>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration= {500}
                    >Skills</Link>
                </div>
                <div className='nav-item'>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Projects</Link>
                </div>
                <div className='nav-item'>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Contact</Link>
                </div>
            </nav>
            <div className='body-container'>
                <Jumbotron/>
                <div className='content-container'>
                    <About id="about"/>
                    <Skills id="skills"/>
                    <ProjectsList id="projects"/>
                    <Contact id="contact"/>
                </div>
                
            </div>
        </div>
    )
};

export default App;