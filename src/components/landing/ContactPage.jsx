import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">

      {/* Global Presence Section */}
      <section className="global-presence">
        <div className="container">
          <motion.div
            className="presence-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="presence-title">Global Reach, Local Impact</h2>
            <p className="presence-desc">
              From urban centers to remote installations, our monitoring solutions cover
              critical infrastructure across the globe.
            </p>
            <div className="cta-group">
              <Link to="/contact-us" className="btn btn-primary">Get in Touch</Link>
              <a href="#careers" className="btn btn-secondary">Join Our Team</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact Grid */}
      <section className="contact-footer">
        <div className="container footer-grid">

          <motion.div
            className="footer-card contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="card-heading">Contact Us</h3>
            <h2 className="card-main-title">Let's build together</h2>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">✉</span>
                <div>
                  <p className="contact-label">Email Us</p>
                  <a href="mailto:mitdip.infrasolva@gmail.com">mitdip.infrasolva@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <p className="contact-label">Call Us</p>
                  <a href="tel:+19836231132">+1 (983) 623-1132</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <p className="contact-label">Visit Global HQ</p>
                  <p>Anandalock Building, 2nd Lane<br />Kalipark Narayanapur, Kolkata - 136</p>
                </div>
              </div>
            </div>

            <div className="contact-extras">
              <p className="extra-title">Business Hours</p>
              <p className="extra-text">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              <p className="extra-text">Sat - Sun: Closed</p>
            </div>
          </motion.div>

          <motion.div
            className="footer-card careers-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="card-heading">Careers</h3>
            <h2 className="card-main-title">Shape the future of infrastructure</h2>

            <p className="careers-text">
              We’re always looking for curious builders. Explore open roles and join a team that cares about craft and impact.
            </p>

            <div className="open-positions">
              <h4 className="positions-title">Current Openings</h4>
              <ul className="positions-list">
                <li>Senior Structural Engineer</li>
                <li>Frontend React Developer</li>
                <li>IoT Systems Architect</li>
              </ul>
            </div>

            <a href="#jobs" className="arrow-link">
              See All Roles <span className="arrow">→</span>
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;