import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Working with MIT-DIP has been a game-changer. Their technology seamlessly integrated into our existing systems, boosting productivity and reducing downtime dramatically.",
    name: "Emily Davis",
    title: "Operations Manager, TechNova",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: 2,
    quote: "Every step of the way, their team was responsive, knowledgeable, and dedicated to helping us achieve our goals. The best decision we made for our infrastructure.",
    name: "James Patel",
    title: "Head of IT, Horizon Logistics",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 5,
  },
  {
    id: 3,
    quote: "We've seen measurable improvements in efficiency since adopting their platform. The insights we gain from their data analytics have been crucial for our growth strategy.",
    name: "Olivia Martinez",
    title: "Strategy Lead, FutureWorks",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < count ? 'filled' : ''}`}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Order: Big -> Medium -> Small */}
          <h2 className="testi-main-heading">SUCCESS STORIES</h2>
          <h3 className="testi-sub-heading">Trusted by Industry Leaders</h3>
          <p className="testi-desc">
            See how leading organizations are using our technology to ensure safety, reduce costs, and extend the life of their most critical assets.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="quote-icon">“</div>
              <p className="quote-text">{testimonial.quote}</p>

              <div className="testimonial-footer">
                <img src={testimonial.avatar} alt={testimonial.name} className="client-avatar" />
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <span className="client-title">{testimonial.title}</span>
                  <StarRating count={testimonial.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;