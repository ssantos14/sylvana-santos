import React from 'react';

class ContactForm extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit (event) {
        event.preventDefault();
        console.log('Form submitted');
        // await this.props.sendEmail();
        // this.props.history.push();
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
                            onChange={this.handleChange}
                            required
                        >{this.state.message}</textarea>
                        <button className='contact-button' type='submit'>Send</button>
            </form>
        )
    }
}

export default ContactForm;