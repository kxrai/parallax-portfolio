import React, { useEffect } from "react"; // Add useEffect import
import "../styles/contact.css";
import Navbar_2 from '../components/Navbar/Navbar_2';

const Contact = () => {
    useEffect(() => {
        document.body.classList.remove("old-page-style");
        document.body.style.height = '100vh'; // Lock height
    }, []);

    return (
        <div className="contact-container">
            <Navbar_2 />
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                I’d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to fill out the form below.
            </p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
