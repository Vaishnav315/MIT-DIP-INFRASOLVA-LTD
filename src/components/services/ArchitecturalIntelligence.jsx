// src/components/services/ArchitecturalIntelligence.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.css';
import architecturalIntelligence from '../../assets/architectural-intelligence.jpg';

const ArchitecturalIntelligence = () => {
    return (
        <div className="service-page">
            {/* 1. HERO SECTION (Cinematic, Parallax) */}
            <section
                className="sp-hero-cinematic"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=3840)` }}
            >
                <div className="sp-hero-cinematic-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Architectural <span>Intelligence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Design that performs. We merge aesthetics with physics to create sustainable, resilient, and iconic structures.
                    </motion.p>
                </div>
            </section>

            {/* STAGGERED LAYOUT (Content) */}
            <section className="sp-section-staggered">
                <div className="sp-staggered-grid reverse">
                    <div className="sp-staggered-content">
                        <h2>Integrated Engineering Design</h2>
                        <p>
                            Modern architecture demands more than just visual appeal; it requires performance. Our "Architectural Intelligence" approach utilizes parametric design and environmental simulation to shape buildings that are natively efficient.
                        </p>
                        <p>
                            By analyzing solar paths, wind patterns, and occupant flow before a single line is drawn, we optimize massing and orientation to reduce energy consumption and maximize comfort, bridging the gap between art and engineering.
                        </p>
                    </div>
                    <div className="sp-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=3840"
                            alt="Structural Design Integration"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES: Technical Grid (Matches Theme) */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Design Capabilities</h2>
                        <p className="sp-subtitle sp-center-block">
                            Computationally driven architectural systems.
                        </p>
                    </div>

                    <div className="sp-tech-grid">
                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">📐</div>
                            <h3>Parametric Design</h3>
                            <p>Algorithmic form-finding to optimize structural geometry and aesthetics.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🌿</div>
                            <h3>Net-Zero Analysis</h3>
                            <p>Energy modeling to minimize carbon footprint and maximize efficiency.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🏗️</div>
                            <h3>BIM Integration</h3>
                            <p>LOD 500 modeling for seamless specialized coordination across trades.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🧩</div>
                            <h3>Spatial AI</h3>
                            <p>Machine learning optimization of floor plans for flow and usage.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">☀️</div>
                            <h3>Solar Studies</h3>
                            <p>Micro-climate simulations to optimize daylighting and thermal comfort.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🧬</div>
                            <h3>Biomimicry</h3>
                            <p>Deriving structural efficiency from biological forms and patterns.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS: Connected Timeline */}
            <section className="sp-section sp-bg-white">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Design Methodology</h2>
                        <p className="sp-subtitle sp-center-block">
                            From concept to reality, precision at every step.
                        </p>
                    </div>
                    <div className="sp-process-timeline">
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">1</div>
                            <h3>Concept</h3>
                            <p>Generative design algorithms exploring option spaces.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">2</div>
                            <h3>Optimize</h3>
                            <p>Refining geometry for light, airflow, and material.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">3</div>
                            <h3>Integrate</h3>
                            <p>Merging structural physics with architectural intent.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">4</div>
                            <h3>Visualize</h3>
                            <p>Immersive VR walkthroughs and detailed documentation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES: Themed Box Layout */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Application Areas</h2>
                    </div>
                    <div className="sp-industry-grid">
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏙️</div>
                                <h3>Towers</h3>
                                <p>Vertical cities designed for wind and views.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">✈️</div>
                                <h3>Aviation</h3>
                                <p>Passenger flow optimization for terminals.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🎓</div>
                                <h3>Education</h3>
                                <p>Campuses that foster collaboration and focus.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏡</div>
                                <h3>Luxury</h3>
                                <p>Bespoke residential designs with smart integration.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🖼️</div>
                                <h3>Cultural</h3>
                                <p>Museums and galleries with precise light control.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏟️</div>
                                <h3>Sports</h3>
                                <p>Stadiums optimized for sightlines and acoustics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Parallax Background */}
            <section
                className="sp-cta"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')` }}
            >
                <div className="sp-container">
                    <h2>Design Your Vision</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Partner with us to create iconic, high-performance architecture.
                    </p>
                    <Link to="/contact-us" className="sp-cta-btn" style={{ marginTop: '2rem' }}>
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ArchitecturalIntelligence;
