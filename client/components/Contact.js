import React from 'react';

const handleChange = () => {
    console.log('hello');
}

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-subcontainer'>
                <div className='email-form-container'>
                    <p className='contact-title'>Send me a message!</p>
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
                    <textarea
                        className='contact-input message'
                        name="Message"
                        value='Message'
                        onChange={handleChange}
                        required
                    />
                    {/* <input
                        className='contact-input message'
                        name="Message"
                        value='Message'
                        onChange={handleChange}
                        required
                    /> */}
                    <button className='contact-button'>Send</button>
                </div>
                <div className='contact-info-contianer'>
                    <div className='info-row'>
                        <img style={{width: 24, height: 24}} src={'/images/phone.png'}/>
                        <p className='contact-text'>(323) 608-5195</p>
                    </div>
                    <div className='info-row'>
                        <img style={{width: 24, height: 24}} src={'/images/linkedin.png'}/>
                        <p className='contact-text'>https://www.linkedin.com/in/sylvanaelizabethsantos</p>
                    </div>
                    <div className='info-row'>
                        <img style={{width: 24, height: 24}} src={'/images/github.png'}/>
                        <p className='contact-text'>http://github.com/ssantos14</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;