import React from 'react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const featuresData = [
  {
    id: 1,
    icon: '💡',
    title: 'Innovation at Core',
    description: 'We leverage AI, IoT, and cutting-edge sensor technology to deliver the most advanced structural health monitoring solutions available.',
  },
  {
    id: 2,
    icon: '🍃',
    title: 'Sustainable Practices',
    description: 'Our methods reduce material waste and extend asset lifecycles, ensuring your infrastructure is both resilient and environmentally responsible.',
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Unwavering Security',
    description: 'Data integrity is paramount. We employ military-grade encryption and strict protocols to protect your critical infrastructure data 24/7.',
  },
  {
    id: 4,
    icon: '🤝',
    title: 'True Partnership',
    description: 'We don’t just supply tools; we collaborate closely with your engineering teams to solve complex problems and achieve long-term goals.',
  },
  {
    id: 5,
    icon: '📊',
    title: 'Measurable Outcomes',
    description: 'Move beyond guesswork. Our data-driven insights provide quantifiable improvements in safety, maintenance costs, and operational uptime.',
  },
  {
    id: 6,
    icon: '📞',
    title: '24/7 Support',
    description: 'Disasters don’t wait for business hours. Our dedicated support team is always available to assist with critical alerts and system needs.',
  },
];

const WhyUs = () => {
  return (
    <section className="why-us-section" id="why">
      <div className="container">
        <motion.div
          className="why-us-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">WHY CHOOSE US</span>
          <h2 className="section-title">Precision. Partnership. Performance.</h2>
          <p className="section-desc">
            We bridge the gap between theoretical analysis and real-world application, delivering actionable insights that extend asset lifecycles and ensure public safety.
          </p>
        </motion.div>

        <div className="why-us-grid">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-cell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="cell-icon">{feature.icon}</div>
              <h3 className="cell-title">{feature.title}</h3>
              <p className="cell-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;