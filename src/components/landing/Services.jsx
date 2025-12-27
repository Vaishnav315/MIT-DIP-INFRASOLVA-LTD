import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';
import serviceStructural from '../../assets/service-structural.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Architectural Intelligence",
      description: "Precisely calculated drawings that blend aesthetic vision with structural integrity. We optimize spatial layouts and material usage to create sustainable, efficient, and visually striking designs.",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074e0c?q=80&w=2070",
      link: "/services/architectural-intelligence"
    },
    {
      id: 2,
      title: 'Structural Engineering',
      description: 'Advanced analysis and design for resilient, long-lasting structures. We optimize load paths and ensure compliance with modern safety codes.',
      image: "https://images.unsplash.com/photo-1518382404015-3298811430c2?q=80&w=2070",
      link: "/services/structural-engineering"
    },
    {
      id: 3,
      title: "Retrofitting & Rehab",
      description: "Modernizing existing structures to extend asset lifecycle. We employ state-of-the-art strengthening techniques, including carbon fiber wrapping and damping systems, to restore and enhance structural performance.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=2070",
      link: "/services/retrofitting-rehab"
    },
    {
      id: 4,
      title: "Structural Health Monitoring",
      description: "Real-time sensing to detect damage early and ensure safety. Our IoT-enabled sensor networks provide continuous feedback on vibration, tilt, and strain, allowing for predictive maintenance and immediate anomaly detection.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670",
      link: "/services/structural-health-monitoring"
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
              <Link to={service.link} className="row-link">Explore Solution →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;