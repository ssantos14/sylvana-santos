import React from 'react';

const handleChange = () => {
    console.log('hello');
}

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-subcontainer'>
                <p className='contact-title'>Contact</p>
                <input
                className='contact-input'
                name="email"
                value='Email'
                onChange={handleChange}
                required
                />
                <input
                className='contact-input'
                name="address"
                value='Address'
                onChange={handleChange}
                required
                />
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