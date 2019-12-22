import React from 'react';

const handleChange = () => {
    console.log('hello');
}

const Contact = () => {
    return (
        <form className="contact-container" onSubmit={handleChange}>
            <label htmlFor="email">email (required)</label>
            <input
            name="email"
            type="email"
            value='{this.state.email}'
            onChange={handleChange}
            required
            />

            <label htmlFor="address">address (required)</label>
            <input
            name="address"
            value='{this.state.address}'
            onChange={handleChange}
            required
            />

            <label htmlFor="phone">phone (required)</label>
            <input
            name="phone"
            value='{this.state.phone}'
            onChange={handleChange}
            required
            />

            <button type="submit">Save Changes</button>
        </form>
    )
}

export default Contact;