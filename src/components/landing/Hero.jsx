import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./Hero.css";

export default function Hero() {
  return (
    <section className="landing-hero" id="home">
      {/* Left Panel: Kinetic Typography */}
      <div className="hero-split hero-left">
        <div className="content-box">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-display">
              SMART<br />
              <span className="outline-text">INFRA</span><br />
              STRUCTURE
            </h1>
          </motion.div>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Next-generation structural health monitoring.
            <br />We ensure reliability for the world's most critical assets.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#services" className="btn btn-primary">Explore Solutions</a>
            <Link to="/contact-us" className="btn btn-text">Get in Touch →</Link>
          </motion.div>
        </div>
      </div>

      {/* Right Panel: Immersive Image */}
      <div className="hero-split hero-right">
        <div className="image-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2800"
          alt="Modern Architecture"
        />
      </div>
    </section>
  );
}
