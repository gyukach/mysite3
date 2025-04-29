import '../../assets/style/pages/home/HomePage.css';
import Home from '../../components/home/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p className="subtitle">Web Developer & UI/UX Designer</p>
                <Link to="/gallery" className="cta-button">View My Work</Link>
            </div>
            <Home />
        </div>
    );
};

export default HomePage;