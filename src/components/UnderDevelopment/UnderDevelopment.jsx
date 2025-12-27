/* src/components/UnderDevelopment/UnderDevelopment.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import './UnderDevelopment.css';

const UnderDevelopment = () => {
    return (
        <div className="under-development-container">
            <div className="ud-content">
                <span className="ud-icon" role="img" aria-label="construction">🏗️</span>
                <h1 className="ud-title">Under Development</h1>
                <p className="ud-message">
                    We're working hard to bring you something amazing. This section is currently under construction as we refine our expertise to serve you better.
                </p>
                <Link to="/" className="ud-back-btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default UnderDevelopment;
