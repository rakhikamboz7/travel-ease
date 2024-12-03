import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/About.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const quotes = [
  "The world is a book and those who do not travel read only one page.",
  "Travel is the only thing you buy that makes you richer.",
  "Life is short, and the world is wide, so get out there and explore it.",
  "To travel is to live.",
  "Jobs fill your pocket, but adventures fill your soul.",
];

const AboutUs = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 2000); // Change quote every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Header />

      <div className="about-container">
        <div className="about-header">
        <p className="overlay-text">Empowering your journeys with seamless travel solutions.</p>
          <div className="quote-section">
            <p className="quote">{quotes[currentQuote]}</p>
          </div>
          
          <button onClick={handleLearnMore} className="learn-more-btn">
            Learn More
          </button>
          <div className="about-content">
          

        
          {showMore && (
            <p className="more-info">
              TravelEase was founded with a mission to simplify travel for
              everyone. Our goal is to offer personalized, hassle-free travel
              experiences tailored to your preferences. From flight bookings to
              hotel accommodations, we've got you covered.
            </p>
          )}
        </div>
        </div>
      

        
        {/* Our History Section */}
        <div className="history-section">
          <h3>Our History</h3>
          <div className="history-grid">
            {/* Flipping Card 1 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h4>Founded</h4>
                  <p>2010</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Our journey began in 2024 with the purpose of providing
                    hassle-free travel solutions for millions of travelers.
                  </p>
                </div>
              </div>
            </div>

            {/* Flipping Card 2 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h4>Growth</h4>
                  <p>100,000+ Travelers</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Since then, we've grown to serve over 100,000 travelers
                    yearly with various travel solutions, including vacation
                    packages, adventure tours, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <p>
            Discover new destinations and make unforgettable memories. Reach out
            to us today to start planning your dream vacation.
          </p>
          <button onClick={navigateToContact} className="contact-btn">
            Contact Us
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;