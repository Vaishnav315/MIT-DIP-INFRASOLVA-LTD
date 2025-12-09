// CoreValuesSection.jsx
import React from 'react';
import './Corevalue.css'; 

const coreValuesData = [
  {
    id: 1,
    title: 'Core Value',
    description:
      'We build secure, reliable, and human-centered SHM devices that help organizations monitor structures smarter.',
    classModifier: 'card-1',
  },
  {
    id: 2,
    title: 'Core Value',
    description:
      'We build secure, reliable, and human-centered SHM devices that help organizations monitor structures smarter.',
    classModifier: 'card-2',
  },
  {
    id: 3,
    title: 'Core Value',
    description:
      'We build secure, reliable, and human-centered SHM devices that help organizations monitor structures smarter.',
    classModifier: 'card-3',
  },
];

const CoreValuesSection = () => {
  // IMPORTANT: Replace this with the actual path or URL of your image.
  const backgroundImage = 'https://images.pexels.com/photos/8361807/pexels-photo-8361807.jpeg'; 

  return (
    <section className="core-values-section">
      <div className="container">
        {/* --- Left Content Area --- */}
        <div className="content-left">
          <h1 className="main-heading">
            Our <br />
            <span className="highlight">Core Values</span>
          </h1>
          <p className="description">
            We build secure, reliable, and human-centered SHM devices that help
            organizations monitor structures smarter. Our approach combines
            engineering rigor, actionable insights, and lasting partnerships.
            Sensors capture data. We build secure, reliable, and human-centered
            SHM devices that help organizations monitor structures smarter. Our
            actionable insights, and lasting partnerships. Sensors capture data.
          </p>
        </div>

        {/* --- Right Image and Cards Area --- */}
        <div className="content-right">
          {/* Background Image Container */}
          <div 
            className="bg-image-container" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-label="Man standing on a hand overlooking a city."
          >
            <div className="image-overlay"></div>
          </div>

          {/* Core Value Cards */}
          <div className="cards-wrapper">
            {coreValuesData.map((value) => (
              <div 
                key={value.id} 
                className={`card ${value.classModifier}`}
              >
                <p className="card-number">0{value.id}</p>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;