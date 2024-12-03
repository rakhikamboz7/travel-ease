import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="offers-container">
      <h1>OFFERS:</h1>
      <Slider {...settings}>
        <div className="offer-card">
          <img src="/path-to-offer-image" alt="Offer 1" />
          <p>30% Discount on stays</p>
        </div>
        <div className="offer-card">
          <img src="/path-to-offer-image" alt="Offer 2" />
          <p>14% off on Weekend stays</p>
        </div>
        <div className="offer-card">
          <img src="/path-to-offer-image" alt="Offer 3" />
          <p>Cozy trips in nature</p>
        </div>
        <div className="offer-card">
          <img src="/path-to-offer-image" alt="Offer 4" />
          <p>Exciting family packages</p>
        </div>
        <div className="offer-card">
          <img src="/path-to-offer-image" alt="Offer 5" />
          <p>Luxury hotel deals</p>
        </div>
        {/* Add more cards here */}
      </Slider>
    </div>
  );
};

export default Offers;
