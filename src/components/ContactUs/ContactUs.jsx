// ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to an API endpoint here
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <section className="contact-us-section">
      <div className="contact-container">

        {/* --- Left Column: Information --- */}
        <div className="contact-info">
          <p className="contact-tag">GET IN TOUCH</p>
          <h2 className="contact-title">Let's build something smarter, together.</h2>
          <p className="contact-description">
            We are always ready to discuss your next infrastructure project. Reach out
            to our team of engineers and solution architects for a tailored consultation.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div className="detail-text">
                <h4>Phone</h4>
                <p>+91 9836231132</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div className="detail-text">
                <h4>Email</h4>
                <p>mitdip.infrasolva@gmail.com</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div className="detail-text">
                <h4>Office</h4>
                <p> Anandalock building, 2nd lane - Kalipark Narayanapur Kolkata - 136 </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Contact Form --- */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;