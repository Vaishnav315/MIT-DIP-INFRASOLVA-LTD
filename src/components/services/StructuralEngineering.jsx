// src/components/services/StructuralEngineering.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.css';
import structuralEngineering from '../../assets/structural-engineering.jpg';

const StructuralEngineering = () => {
    return (
        <div className="service-page">
            {/* 1. HERO SECTION (Cinematic, Parallax) */}
            <section
                className="sp-hero-cinematic"
                style={{
                    backgroundImage: `url(${structuralEngineering})`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-hero-cinematic-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Structural <span>Engineering</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Foundations for the future. We deliver safe, efficient, and innovative structural designs for any scale or complexity.
                    </motion.p>
                </div>
            </section>

            {/* STAGGERED LAYOUT (Content) */}
            <section className="sp-section-staggered">
                <div className="sp-staggered-grid">
                    <div className="sp-staggered-content">
                        <h2>Precision & Power</h2>
                        <p>
                            From skyscrapers to long-span bridges, structural engineering is the art of defying gravity. Our team delivers optimized structural solutions that balance safety, constructability, and architectural intent.
                        </p>
                        <p>
                            Using advanced Finite Element Analysis (FEA) and BIM workflows, we simulate every load scenario—seismic, wind, and thermal—to ensure your project stands the test of time while minimizing material usage and carbon footprint.
                        </p>
                    </div>
                    <div className="sp-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3840"
                            alt="Steel Construction Site"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES: Technical Grid (Matches Theme) */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Design Specifications</h2>
                        <p className="sp-subtitle sp-center-block">
                            Rigorous engineering for demanding environments.
                        </p>
                    </div>

                    <div className="sp-tech-grid">
                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">💻</div>
                            <h3>Advanced FEA</h3>
                            <p>Finite Element Analysis to stress-test designs against extreme scenarios.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🌋</div>
                            <h3>Seismic Design</h3>
                            <p>Performance-based earthquake engineering for maximum safety factor.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🗼</div>
                            <h3>Steel Optimization</h3>
                            <p>Efficient structural steel design minimizing tonnage without compromising strength.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🧱</div>
                            <h3>Reinforced Concrete</h3>
                            <p>Complex detailing for shear walls, raft foundations, and post-tensioned slabs.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">💨</div>
                            <h3>Wind Engineering</h3>
                            <p>CFD analysis for high-rise comfort and cladding pressure distribution.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">✅</div>
                            <h3>Code Compliance</h3>
                            <p>Ensuring full adherence to IS, Eurocodes, and ACI standards.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS: Connected Timeline */}
            <section className="sp-section sp-bg-white">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Engineering Process</h2>
                        <p className="sp-subtitle sp-center-block">
                            Systematic execution from analysis to documentation.
                        </p>
                    </div>
                    <div className="sp-process-timeline">
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">1</div>
                            <h3>Analysis</h3>
                            <p>Site evaluation and load data collection.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">2</div>
                            <h3>Simulate</h3>
                            <p>Digital twin modeling to test wind and seismic.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">3</div>
                            <h3>Design</h3>
                            <p>Optimizing member sizes for cost and safety.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">4</div>
                            <h3>Validate</h3>
                            <p>Peer review and code compliance checks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES: Themed Box Layout */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Industries Served</h2>
                    </div>
                    <div className="sp-industry-grid">
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏢</div>
                                <h3>High-Rise</h3>
                                <p>Skyscrapers optimized for drift and acceleration.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏭</div>
                                <h3>Industrial</h3>
                                <p>Plants requiring heavy equipment support.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🌉</div>
                                <h3>Infrastructure</h3>
                                <p>Road and rail bridges for long-term durability.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">⚡</div>
                                <h3>Power</h3>
                                <p>Nuclear and thermal plant structural containment.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏟️</div>
                                <h3>Stadiums</h3>
                                <p>Large-span roofs and dynamic load management.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">✈️</div>
                                <h3>Transport</h3>
                                <p>Airport terminals and multi-modal hubs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Parallax Background */}
            <section
                className="sp-cta"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670')`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-container">
                    <h2>Engineer for Excellence</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Build with confidence. Build with us.
                    </p>
                    <Link to="/contact-us" className="sp-cta-btn" style={{ marginTop: '2rem' }}>
                        Discuss Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default StructuralEngineering;
