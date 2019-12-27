import React from 'react';

const handleChange = () => {
    console.log('hello');
}

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-subcontainer'>
                <p className='about-title'>Contact</p>
                <label htmlFor="email" className='contact-label'>Email</label>
                <input
                className='contact-input'
                name="email"
                value='Email'
                onChange={handleChange}
                required
                />

                <label className='contact-label'>Name</label>
                <input
                className='contact-input'
                name="address"
                value='Address'
                onChange={handleChange}
                required
                />

                <label className='contact-label'>Message</label>
                <input
                className='contact-input'
                name="Message"
                value='Message'
                onChange={handleChange}
                required
                />

                <button className='contact-button'>Send</button>
            </div>
        </div>
    )
}

export default Contact;