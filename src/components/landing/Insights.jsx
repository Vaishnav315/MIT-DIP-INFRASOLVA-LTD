import React from 'react';
import './Insights.css';

// Data structure for the blog post cards
const blogPostsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664", // AI/Predictive
    title: "Predictive Maintenance: The AI-Driven Revolution",
    summary: "Analyzing the paradigm shift from reactive repairs to predictive intervention using real-time sensor fusion and machine learning algorithms.",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070", // Security/IIoT
    title: "Cyber-Physical Security: Fortifying IIoT Networks",
    summary: "Implementing defense-in-depth strategies to secure connected industrial systems and critical assets against emerging digital threats.",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2670", // Data Strategy
    title: "Operational Intelligence: From Data to Strategy",
    summary: "Leveraging advanced data visualization and analytics to empower executive decision-making and optimize operational efficiency.",
    link: "#",
  },
];

const Insights = () => {
  return (
    <section className="insights-section">
      {/* Header Section */}
      <div className="insights-header">
        <h5 className="insights-subheading">THOUGHT LEADERSHIP</h5>
        <h2 className="insights-main-heading">Industry Perspectives & Innovation</h2>
      </div>

      {/* Blog Posts Grid/Carousel Wrapper */}
      <div className="blog-carousel-wrapper">
        <div className="blog-posts-container">
          {/* The CSS enables horizontal scrolling and snapping on this container */}
          {blogPostsData.map(post => (
            <div key={post.id} className="blog-card">

              {/* Image */}
              <div className="card-image-wrapper">
                <img src={post.image} alt={post.title} className="card-image" />
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-summary">{post.summary}</p>
                <a href={post.link} className="read-more-link">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;