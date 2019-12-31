import React from 'react';

const About = () => {
    return (
        <div className='about-container'>
            <img style={{height: 200, width: 200, borderRadius: '50%'}}src={'/images/profilePic.jpeg'}/>
            {/* <p className='about-title'>About</p> */}
            <p className='about-text'>
            My curiosity for software development grew from my desire to address issues within the education system. 
            As a Teacher, I devoted myself to maintaining high levels of engagement in the classroom. 
            Over time, it became a goal of mine to become a Software Engineer. 
            Given the power and widespread reach of technology, I wanted to develop skills that would allow me to provide a quality education to every student. 
            I'm currently a Full-Stack Developer specializing in Javascript and the NERD stack, and I'm eager to empower teachers and students through technology. 
            </p>
        </div>
    )
}
 export default About;