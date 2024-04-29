import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            surname: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="contact-container">
                    <h1>Contact</h1>
                    <p>Send us an email here or chat with us!</p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="name-surname">
                            <div className="input-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="surname">Surname:</label>
                                <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Contact;
