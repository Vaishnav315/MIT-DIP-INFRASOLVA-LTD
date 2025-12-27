
// src/components/services/RetrofittingRehab.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.css';


const RetrofittingRehab = () => {
    return (
        <div className="service-page">
            {/* HERO: Cinematic Enterprise Design */}
            <section
                className="sp-hero-cinematic"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2070')`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-hero-cinematic-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Retrofitting & <span>Rehabilitation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Extending the life of our built legacy. We utilize advanced materials and engineering to restore strength and ensure modern compliance.
                    </motion.p>
                </div>
            </section>

            {/* STAGGERED LAYOUT (Content) */}
            <section className="sp-section-staggered">
                <div className="sp-staggered-grid reverse">
                    <div className="sp-staggered-content">
                        <h2>Revitalize Your Assets</h2>
                        <p>
                            Aging infrastructure doesn't always need replacement. Strategic rehabilitation can extend service life by decades at a fraction of the cost of new construction. Our team specializes in complex structural interventions.
                        </p>
                        <p>
                            From seismic upgrades to corrosion control, we employ cutting-edge materials like Carbon Fiber (FRP) and advanced chemical grouting to restore lost capacity and ensure compliance with modern safety codes.
                        </p>
                    </div>
                    <div className="sp-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1531834685032-c74fe1c84de6?q=80&w=2070"
                            alt="Structural Strengthening"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES: Technical Grid (Matches Theme) */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Technical Competencies</h2>
                        <p className="sp-subtitle sp-center-block">
                            Engineered interventions for structural longevity.
                        </p>
                    </div>

                    <div className="sp-tech-grid">
                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🏗️</div>
                            <h3>Seismic Upgrades</h3>
                            <p>Damping systems and shear wall additions for earthquake resistance.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🧵</div>
                            <h3>FRP Wrapping</h3>
                            <p>Carbon fiber reinforcement for rapid load capacity enhancement.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🔧</div>
                            <h3>Precision Grouting</h3>
                            <p>Epoxy injection systems for deep structural crack repair.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">⚖️</div>
                            <h3>Load Modification</h3>
                            <p>Strengthening slabs to support increased equipment loads.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🛡️</div>
                            <h3>Corrosion Control</h3>
                            <p>Cathodic protection systems to arrest rebar oxidation.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🌊</div>
                            <h3>Waterproofing</h3>
                            <p>Advanced membranes and crystallization agents for concrete sealing.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS: Connected Timeline */}
            <section className="sp-section sp-bg-white">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Rehabilitation Protocol</h2>
                        <p className="sp-subtitle sp-center-block">
                            A rigorous engineering approach to asset renewal.
                        </p>
                    </div>
                    <div className="sp-process-timeline">
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">1</div>
                            <h3>Diagnostic</h3>
                            <p>NDT mapping to identify failure mechanisms.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">2</div>
                            <h3>Strategy</h3>
                            <p>Selecting strengthening vs. stiffening techniques.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">3</div>
                            <h3>Execution</h3>
                            <p>Precision application with minimal disruption.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">4</div>
                            <h3>Validation</h3>
                            <p>Load testing to verify restored capacity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES: Themed Box Layout */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Target Sectors</h2>
                    </div>
                    <div className="sp-industry-grid">
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏛️</div>
                                <h3>Heritage</h3>
                                <p>Restoring cultural icons with minimal visual impact.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🌉</div>
                                <h3>Bridges</h3>
                                <p>Extending fatigue life of critical transport links.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏗️</div>
                                <h3>Parking</h3>
                                <p>Repairing chloride damage in concrete decks.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏭</div>
                                <h3>Industrial</h3>
                                <p>Foundation strengthening for new heavy machinery.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏥</div>
                                <h3>Healthcare</h3>
                                <p>Seismic retrofitting for essential facilities.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏢</div>
                                <h3>Commercial</h3>
                                <p>Adaptive reuse of existing building stock.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Parallax Background */}
            <section
                className="sp-cta"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-container">
                    <h2>Restore Your Structure Today</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Expert rehabilitation solutions to protect your investment.
                    </p>
                    <Link to="/contact-us" className="sp-cta-btn" style={{ marginTop: '2rem' }}>
                        Get an Assessment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RetrofittingRehab;
