// OurStory.jsx
import React from 'react';
import './OurStory.css'; // Linking to the CSS file

// Data for the timeline section
const timelineData = [
  {
    year: '2025',
    title: 'Founded',
    description: 'Launched our first product focused on reliability and simplicity.',
  },
  {
    year: '2026',
    title: 'First 50 Clients',
    description: 'Expanded services and customer support operations.',
  },
  {
    year: '2028',
    title: 'Global Expansion',
    description: 'Opened regional teams across APAC & EMEA.',
  },
  {
    year: '2030',
    title: 'Platform Milestone',
    description: 'Reached 99.9% uptime SLA with enterprise security.',
  },
];

const OurStory = () => {
  // IMPORTANT: Replace this with the actual path or URL of your image.
  const teamImage = 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg'; 

  return (
    <section className="about-us-section">
      <div className="container">
        
        {/* --- Left Column: Story and Timeline --- */}
        <div className="story-column">
          <p className="section-tag">OUR STORY</p>
          <h2 className="section-title">From a small idea to a global partner</h2>
          
          <p className="intro-paragraph">
            Founded in 2025, we started by helping local businesses modernize critical 
            operations, perations. Today we support organizations around with resilient 
            platforms and teams that care.
          </p>
          <p className="intro-paragraph sub-text">
            Intron paragraph 1 redeo of shoped you mnp aace the rout you tne that 
            that care.
          </p>
          
          {/* Timeline */}
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="timeline-year">{item.year} — {item.title}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Image and Impact Card --- */}
        <div className="impact-column">
          
          {/* Image Block */}
          <div className="image-block">
            <img 
                src={teamImage} 
                alt="Two businessmen shaking hands" 
                className="team-photo" 
            />
          </div>

          {/* Impact Card */}
          <div className="impact-card">
            <p className="section-tag-impact">IMPACT</p>
            <h3 className="impact-title">Engineering solutions that matter</h3>
            <p className="impact-description">
              We deliver secure and reliable platforms that drive tangible results. 
              Our focus is on building long-term partnerships and providing human-centered 
              support to ensure your success. We care about the craft and the positive 
              impact our work has on our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;