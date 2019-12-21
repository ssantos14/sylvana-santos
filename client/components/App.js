import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ProjectsList from './ProjectsList';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                </nav>
                <div>
                    <Route path='/projects' component={ProjectsList}/>
                    <Route path='/about' component={About}/>
                </div>
            </div>
        </Router>
    )
};

export default App;