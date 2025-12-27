// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

// Landing Page Components
import Hero from "./components/landing/Hero.jsx";
import Services from "./components/landing/Services.jsx";
import WhyUs from "./components/landing/WhyUs.jsx";
import Insights from "./components/landing/Insights.jsx";
import ContactPage from "./components/landing/ContactPage.jsx";

import Footer from "./components/Footer.jsx";

// About Us Page
import AboutUs from "./components/AboutUs/AboutUs.jsx";

// ContactUs Page
import ContactUs from "./components/ContactUs/ContactUs.jsx";

//people page
import People from "./components/People/People.jsx";

// Service Pages
import ArchitecturalIntelligence from "./components/services/ArchitecturalIntelligence.jsx";
import StructuralEngineering from "./components/services/StructuralEngineering.jsx";
import RetrofittingRehab from "./components/services/RetrofittingRehab.jsx";
import StructuralHealthMonitoring from "./components/services/StructuralHealthMonitoring.jsx";

// Careers Page
import Careers from "./components/Careers/Careers.jsx";

// Under Development Page
import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment.jsx";


import "./index.css";


// Smooth scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// Landing Page as a grouped component
const LandingPage = () => (
  <>
    <Hero />
    <Services />
    <WhyUs />
    <Insights />
    <ContactPage />
  </>
);


export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* People/Team Page */}
        <Route path="/team" element={<People />} />

        {/* Service Pages */}
        <Route path="/services/architectural-intelligence" element={<ArchitecturalIntelligence />} />
        <Route path="/services/structural-engineering" element={<StructuralEngineering />} />
        <Route path="/services/retrofitting-rehab" element={<RetrofittingRehab />} />
        <Route path="/services/structural-health-monitoring" element={<StructuralHealthMonitoring />} />

        {/* Careers Page */}
        <Route path="/careers" element={<Careers />} />

        {/* Missing Sections (Under Development) */}
        <Route path="/projects" element={<UnderDevelopment />} />
        <Route path="/products" element={<UnderDevelopment />} />
        <Route path="/blog" element={<UnderDevelopment />} />

      </Routes>

      <Footer />
    </Router>
  );
}
