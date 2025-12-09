import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Architectural Intelligence",
      description: "Precisely calculated drawings that blend aesthetic vision with structural integrity. We optimize spatial layouts and material usage to create sustainable, efficient, and visually striking designs.",
      image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070", // Modern Tech Building (Dark)
    },
    {
      id: 2,
      title: 'Structural Engineering',
      description: 'Advanced analysis and design for resilient, long-lasting structures. We optimize load paths and ensure compliance with modern safety codes.',
      image: '/assets/service-structural.jpg', // Bridge/Steel Structure
    },
    {
      id: 3,
      title: "Retrofitting & Rehab",
      description: "Modernizing existing structures to extend asset lifecycle. We employ state-of-the-art strengthening techniques, including carbon fiber wrapping and damping systems, to restore and enhance structural performance.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2062", // User Liked (Keep)
    },
    {
      id: 4,
      title: "Structural Health Monitoring",
      description: "Real-time sensing to detect damage early and ensure safety. Our IoT-enabled sensor networks provide continuous feedback on vibration, tilt, and strain, allowing for predictive maintenance and immediate anomaly detection.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070", // High-tech dashboard/monitoring
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header-full">
        <h2 className="section-title">Our Capabilities</h2>
        <p className="section-subtitle">
          Engineering the future of infrastructure with precision and care.
        </p>
      </div>

      <div className="services-rows-container">
        {servicesData.map((service, index) => (
          <div className="service-row" key={service.id}>
            <div className="row-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="row-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#more" className="row-link">Explore Service →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;