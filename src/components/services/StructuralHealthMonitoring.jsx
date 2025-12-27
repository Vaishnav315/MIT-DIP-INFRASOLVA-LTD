
// src/components/services/StructuralHealthMonitoring.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.css';

import shmHero from '../../assets/images/shm-hero-new.png';

const StructuralHealthMonitoring = () => {
    return (
        <div className="service-page">
            {/* 1. HERO SECTION (Cinematic, Parallax) */}
            <section
                className="sp-hero-cinematic"
                style={{
                    backgroundImage: `url(${shmHero})`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-hero-cinematic-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Structural Health <span>Monitoring</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Predictive intelligence for critical infrastructure. We transform passive structures into smart assets through real-time telemetry and AI-driven insights.
                    </motion.p>
                </div>
            </section>

            {/* STAGGERED LAYOUT (Content) */}
            <section className="sp-section-staggered">
                <div className="sp-staggered-grid">
                    <div className="sp-staggered-content">
                        <h2>The Science of Structure</h2>
                        <p>
                            Infrastructure is the backbone of society, but it faces constant threats from aging, environmental stress, and loading demands. Our Structural Health Monitoring (SHM) systems provide a 24/7 nervous system for your assets.
                        </p>
                        <p>
                            By integrating advanced sensors with cloud-based analytics, we detect micro-failures before they become catastrophic. This proactive approach extends asset life, ensures public safety, and optimizes maintenance budgets.
                        </p>
                    </div>
                    <div className="sp-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
                            alt="Advanced Sensor Diagnostics"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES: Technical Grid (Kept as is, matches theme) */}
            <section className="sp-section sp-bg-light">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">System Specifications</h2>
                        <p className="sp-subtitle sp-center-block">
                            Technical capabilities of our monitoring ecosystem.
                        </p>
                    </div>

                    <div className="sp-tech-grid">
                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">📡</div>
                            <h3>Real-time Telemetry</h3>
                            <p>Continuous data transmission from IoT sensors with sub-second latency.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">📊</div>
                            <h3>Strain Analysis</h3>
                            <p>Micro-strain measurement to predict material fatigue and load distribution.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">⚡</div>
                            <h3>Automated Alerts</h3>
                            <p>Instant breach notifications via API/SMS when safety thresholds are exceeded.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🏗️</div>
                            <h3>Digital Twin</h3>
                            <p>3D visualization mapping real-time sensor data to structural models.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">📉</div>
                            <h3>Predictive AI</h3>
                            <p>Machine learning models forecasting degradation curves years in advance.</p>
                        </motion.div>

                        <motion.div className="sp-tech-card" whileHover={{ y: -5 }}>
                            <div className="sp-tech-icon">🔌</div>
                            <h3>Edge Computing</h3>
                            <p>On-site data processing to reduce bandwidth and enable autonomous reaction.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS: Connected Timeline */}
            <section className="sp-section sp-bg-white">
                <div className="sp-container">
                    <div className="sp-text-center">
                        <h2 className="sp-title">Deployment Protocol</h2>
                        <p className="sp-subtitle sp-center-block">
                            A systematic approach to digitizing infrastructure.
                        </p>
                    </div>

                    <div className="sp-process-timeline">
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">1</div>
                            <h3>Audit</h3>
                            <p>Identifying critical stress points and sensor locations.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">2</div>
                            <h3>Install</h3>
                            <p>Precision deployment of strain gauges and accelerometers.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">3</div>
                            <h3>Calibrate</h3>
                            <p>Establishing baselines and defining alarm thresholds.</p>
                        </div>
                        <div className="sp-timeline-step">
                            <div className="sp-timeline-number">4</div>
                            <h3>Monitor</h3>
                            <p>Continuous cloud-based integrity tracking.</p>
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
                                <div className="sp-industry-icon">🌉</div>
                                <h3>Long-Span Bridges</h3>
                                <p>Monitoring cable tension and deck vibration.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🛢️</div>
                                <h3>Oil & Gas</h3>
                                <p>Pipeline integrity and storage tank settlement.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🚇</div>
                                <h3>Metro Tunnels</h3>
                                <p>Detecting convergence and lining stress.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏢</div>
                                <h3>High-Rise Buildings</h3>
                                <p>Real-time damping system analysis.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">⚡</div>
                                <h3>Dams & Hydro</h3>
                                <p>Piezometer and seepage monitoring.</p>
                            </div>
                        </div>
                        <div className="sp-industry-card">
                            <div className="sp-industry-content">
                                <div className="sp-industry-icon">🏭</div>
                                <h3>Nuclear Plants</h3>
                                <p>Containment vessel structural integrity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Parallax Background */}
            <section
                className="sp-cta"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2670')`,
                    backgroundColor: '#0f172a'
                }}
            >
                <div className="sp-container">
                    <h2>Secure Your Assets with Smart Data</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Prevent failures before they happen with our 24/7 monitoring systems.
                    </p>
                    <Link to="/contact-us" className="sp-cta-btn" style={{ marginTop: '2rem' }}>
                        Request a Demo
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default StructuralHealthMonitoring;
