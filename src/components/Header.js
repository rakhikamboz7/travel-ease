import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  // External CSS for styling

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();  // Use useNavigate for navigation in v6

    const handleLinkClick = (link) => {
        setActiveLink(link);
        navigate(link);  // Navigate to the route
    };

    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="logo">TravelEase</h1>
            </div>
            <nav className="nav-links">
                <button 
                    className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/')}
                >
                    Home
                </button>
                <button 
                    className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/about')}
                >
                    About Us
                </button>
                <button 
                    className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} 
                    onClick={() => handleLinkClick('/contact')}
                >
                    Contact Us
                </button>
            </nav>
            <div className="auth-button">
                <button className="signup-btn" onClick={() => handleLinkClick('/signup')}>
                    Join Us Now!
                </button>
            </div>
        </header>
    );
};

export default Header;
