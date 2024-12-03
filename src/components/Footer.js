// src/components/Footer.js
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <a href="#contact">Contact Us</a>
          <a href="#about">About Us</a>
          <a href="#faqs">FAQs</a>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-socials">
        <a href="https://facebook.com" className="social-icon facebook">F</a>
        <a href="https://linkedin.com" className="social-icon linkedin">L</a>
        <a href="https://twitter.com" className="social-icon twitter">T</a>
        <a href="https://youtube.com" className="social-icon youtube">Y</a>
      </div>
    </footer>
  );
};

export default Footer;