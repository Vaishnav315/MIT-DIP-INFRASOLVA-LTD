// ContactUs.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUsStyles.css';

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
    <section className="contact-premium-section">
      <div className="contact-card-wrapper">

        {/* --- Left Panel: Dark Corporate Info --- */}
        <div className="contact-left-panel">
          <div className="panel-content">
            <span className="premium-eyebrow">Contact Us</span>
            <h2 className="premium-heading">Start the Conversation Today</h2>
            <p className="premium-desc">
              Ready to modernize your infrastructure? Our engineers are ready to scope your solution.
            </p>

            {/* Additional Info: "What Happens Next" */}
            <div className="process-steps">
              <h4>What happens next?</h4>
              <ul>
                <li>
                  <span className="step-number">01</span>
                  <span><strong>Initial Consultation:</strong> We review your requirements and constraints.</span>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <span><strong>Technical Proposal:</strong> Detailed architecture and timeline within 48h.</span>
                </li>
              </ul>
            </div>

            <div className="premium-details">
              <div className="detail-row">
                <span className="icon">📞</span>
                <div>
                  <span className="d-label">Direct Line</span>
                  <span className="d-value">+91 9234987787</span>
                </div>
              </div>
              <div className="detail-row">
                <span className="icon">📧</span>
                <div>
                  <span className="d-label">Email</span>
                  <span className="d-value">mitdip.infrasolva@gmail.com</span>
                </div>
              </div>
              <div className="detail-row">
                <span className="icon">📍</span>
                <div>
                  <span className="d-label">Head Office</span>
                  <span className="d-value">Kolkata, West Bengal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Panel: The Form --- */}
        <div className="contact-right-panel">
          <h3 className="form-header">Send us a message</h3>
          <form className="premium-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Full Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Work Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry: Structural Monitoring..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="premium-submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;