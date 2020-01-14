import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-subcontainer'>
                <div className='email-form-container'>
                    <ContactForm/>
                </div>
                <div className='contact-info-container'>
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