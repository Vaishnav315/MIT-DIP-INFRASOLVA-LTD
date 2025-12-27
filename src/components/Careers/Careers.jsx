import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Careers.css';

// FadeUp Component for scroll animations
const FadeUp = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
            }}
        >
            {children}
        </motion.div>
    );
};

const Careers = () => {
    return (
        <div className="careers-page">
            {/* 1. HERO SECTION - Full Height, Immersive */}
            <section className="careers-hero-immersive">
                <div className="careers-hero-overlay"></div>
                <div className="careers-hero-content">
                    <motion.span
                        className="careers-eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Join Our Team
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Engineering the <br /><span>Future of Infrastructure</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        We are solving complex infrastructure challenges with next-gen technology.
                    </motion.p>
                    <motion.div
                        className="careers-hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >

                        <a
                            href="#openings"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="careers-btn-primary"
                        >
                            View Open Roles
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. NARRATIVE SECTION (Staggered Layouts) */}
            <div className="careers-narrative">

                {/* Section A: The Mission */}
                <section className="careers-staggered">
                    <div className="careers-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3840"
                            alt="Collaborative team working on plans"
                        />
                    </div>
                    <div className="careers-staggered-content">
                        <FadeUp>
                            <span className="section-label">Our Mission</span>
                            <h2>We Don't Just Build.<br />We Evolve.</h2>
                            <p>
                                Infrastructure is the backbone of modern society. However, it requires constant care and innovation. At Infrasolva, we are meeting that challenge.
                            </p>
                            <p>
                                By combining Structural Health Monitoring (SHM), AI-driven analytics, and advanced material science, we are giving a voice to the built environment. We treat buildings, bridges, and tunnels as living, breathing data sources.
                            </p>
                        </FadeUp>
                    </div>
                </section>

                {/* Section B: The Culture */}
                <section className="careers-staggered reverse">
                    <div className="careers-staggered-content">
                        <FadeUp>
                            <span className="section-label">Life at Infrasolva</span>
                            <h2>Curiosity Meets <br />Rigorous Discipline.</h2>
                            <p>
                                We are a multidisciplinary team—structural engineers, data scientists, and designers working together.
                            </p>
                            <p>
                                We value transparency, efficiency, and continuous improvement. We encourage distinct ideas and practical solutions.
                            </p>
                        </FadeUp>
                    </div>
                    <div className="careers-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3840"
                            alt="Diverse team collaborating in modern office"
                        />
                    </div>
                </section>

                {/* Section C: The Impact */}
                <section className="careers-staggered">
                    <div className="careers-staggered-image">
                        <img
                            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=3840"
                            alt="Abstract architectural lines looking up at sky"
                        />
                    </div>
                    <div className="careers-staggered-content">
                        <FadeUp>
                            <span className="section-label">Real-World Impact</span>
                            <h2>Work that Matters.</h2>
                            <p>
                                Your code might predict a bridge failure before it happens. Your design might extend the lifespan of a historic landmark by decades.
                            </p>
                            <p>
                                Our solutions are deployed to ensure the safety and longevity of critical assets. This is a responsibility to the future safety and sustainability of our community.
                            </p>
                        </FadeUp>
                    </div>
                </section>
            </div>

            {/* 3. VOICES / QUOTES */}
            <section className="careers-voices">
                <div className="careers-container">
                    <FadeUp>
                        <h2>Voices from the Field</h2>
                    </FadeUp>
                    <div className="voices-grid">
                        <FadeUp delay={0.2}>
                            <div className="voice-card">
                                <p className="quote">"I used to design beams. Now I design the neural networks that monitor them. The work fits perfectly with my passion for innovation."</p>
                                <div className="author">
                                    <div className="author-avatar" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400')` }}></div>
                                    <div>
                                        <strong>Sarah Jenkins</strong>
                                        <span>Lead Data Scientist</span>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <div className="voice-card">
                                <p className="quote">"Infrasolva encourages us to learn and adapt quickly. We are constantly pushing for better solutions that redefine industry standards."</p>
                                <div className="author">
                                    <div className="author-avatar" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400')` }}></div>
                                    <div>
                                        <strong>David Chen</strong>
                                        <span>Senior Structural Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 4. PERKS & BENEFITS (Refined) */}
            <section className="careers-perks-section">
                <div className="careers-container">
                    <FadeUp>
                        <div className="careers-text-center">
                            <h2>Equipping You for Success</h2>
                            <p className="subtitle">We take care of the essentials so you can focus on the impossible.</p>
                        </div>
                    </FadeUp>

                    <div className="perks-grid-modern">
                        {[
                            { icon: "🏥", title: "Premium Health", desc: "100% covered premiums for you and your family." },
                            { icon: "✈️", title: "Remote Friendly", desc: "Work from home, the office, or anywhere with WiFi." },
                            { icon: "💰", title: "Competitive Equity", desc: "We are all owners here. Share in our success." },
                            { icon: "🧠", title: "Learning Budget", desc: "$5k/year for conferences, courses, and workshops." },
                            { icon: "🏝️", title: "Unlimited PTO", desc: "Rest is critical for high performance. Take what you need." },
                            { icon: "👶", title: "Parental Leave", desc: "Generous leave for new parents to bond with family." }
                        ].map((perk, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="perk-card-modern">
                                    <div className="perk-icon">{perk.icon}</div>
                                    <h3>{perk.title}</h3>
                                    <p>{perk.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. OPEN POSITIONS (Accordion/List Style) */}
            <section id="openings" className="careers-openings-section">
                <div className="careers-container">
                    <FadeUp>
                        <div className="openings-header">
                            <h2>Current Opportunities</h2>
                            <p>Ready to define the future? Find your role.</p>
                        </div>
                    </FadeUp>

                    <div className="job-list-modern">
                        {[
                            { title: "Senior Structural Engineer", dept: "Engineering", loc: "New York / Remote", type: "Full-time" },
                            { title: "Lead Full Stack Developer", dept: "Technology", loc: "San Francisco / Remote", type: "Full-time" },
                            { title: "IoT Hardware Specialist", dept: "R&D", loc: "London, UK", type: "On-site" },
                            { title: "AI/ML Researcher", dept: "Data Science", loc: "Remote", type: "Full-time" },
                            { title: "Product Marketing Manager", dept: "Growth", loc: "New York", type: "Hybrid" }
                        ].map((job, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <Link to="/contact-us" className="job-row">
                                    <div className="job-main">
                                        <h3>{job.title}</h3>
                                        <div className="job-meta">
                                            <span>{job.dept}</span>
                                            <span>•</span>
                                            <span>{job.loc}</span>
                                        </div>
                                    </div>
                                    <div className="job-action">
                                        <span className="job-type">{job.type}</span>
                                        <span className="apply-arrow">Apply →</span>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="careers-final-cta">
                <div className="careers-container">
                    <FadeUp>
                        <h2>Don't see your role?</h2>
                        <p>We are always creating new positions for exceptional talent.</p>
                        <Link to="/contact-us" className="btn-white-outline">
                            Pitch Your Role
                        </Link>
                    </FadeUp>
                </div>
            </section>

        </div>
    );
};

export default Careers;
