import React from 'react';
import './Insights.css';

// Data structure for the blog post cards
const blogPostsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", // Industrial Tech/Maintenance
    title: "The Future of Predictive Maintenance in Infrastructure",
    summary: "Explore how AI and real-time monitoring are revolutionizing the way we manage and maintain critical infrastructure, preventing failures before they happen.",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", // Digital Security/Lock
    title: "Building Trust: Security Best Practices for IoT Devices",
    summary: "A deep dive into our “security-first” approach, outlining the key principles and protocols we use to protect our clients’ data and connected systems.",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Data Graphs/Charts
    title: "From Data to Decisions: The Power of Analytics Platforms",
    summary: "Learn how a well-designed analytics platform can turn raw sensor data into actionable insights, empowering leaders to make smarter, faster decisions.",
    link: "#",
  },
];

const Insights = () => {
  return (
    <section className="insights-section">
      {/* Header Section */}
      <div className="insights-header">
        <h5 className="insights-subheading">INSIGHTS</h5>
        <h2 className="insights-main-heading">Latest from our blog</h2>
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