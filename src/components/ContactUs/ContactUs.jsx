// ContactUs.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_mv2zhqe',
        'template_hvsd5o7',
        form.current,
        {
          publicKey: 'auECQy2lc6CjeT4ZW',
        }
      )
      .then(
        () => {
          setLoading(false);
          alert('Message Sent!');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error);
          alert(`Failed to send message. Error: ${JSON.stringify(error)}`);
        }
      );
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
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Full Name</label>
              <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Work Email</label>
              <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;