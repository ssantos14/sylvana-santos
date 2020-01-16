import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit (event) {
        event.preventDefault();
        axios.post('https://mailthis.to/sylvana.e.santos@gmail.com', {
            email: this.state.email,
            _subject: this.state.subject,
            message: this.state.message
          }).then(function () {
            location.href = 'https://mailthis.to/confirm'
        });
        this.setState({email: '', subject: '', message: ''});
    }

    handleChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <p className='contact-title'>Send me a message!</p>
                        <input
                            className='contact-input'
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            className='contact-input'
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                            required
                        />
                        <textarea
                            className='contact-input message'
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            required
                        >{this.state.message}</textarea>
                        <button className='contact-button' type='submit'>Send</button>
            </form>
        )
    }
}

export default ContactForm;