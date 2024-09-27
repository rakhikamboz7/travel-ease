import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import Offers from '../components/Home/Offes'; // Fixed typo from Offers to Offers
import PopularHotels from '../components/Home/PopularHotels';
import Footer from '../components/Home/Footer';
import '../Styles/HomePage.css';

const Homepage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHotels = async () => {
        const options = {
            method: 'GET',
            url: 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace',
            params: {
                id: 'ChIJ7cv00DwsDogRAMDACa2m4K8',
                display_name: 'Chicago, IL',
                totalRecords: '10',
                currency: 'USD',
                adults: '1'
            },
            headers: {
                'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual key
                'x-rapidapi-host': 'airbnb19.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setHotels(response.data.data); // Assuming response.data.data contains the hotel info
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

<button onClick={fetchHotels} className="fetch-hotels-btn">Fetch Hotels</button>
}, []);
return (
  <div className="background">
      <Header />
      <main>
          <SearchBar />
          <Offers />
          <PopularHotels />
          <section className="hotel-list">
              {loading ? ( 
                  <p>Loading hotels...</p>
              ) : error ? (
                  <p>Error loading hotels: {error.message}</p>
              ) : (
                  hotels.map(hotel => (
                      <div key={hotel.id} className="hotel-item">
                          <img src={hotel.image_url} alt={hotel.name} />
                          <h2>{hotel.name}</h2>
                          <p>{hotel.description}</p>
                          <p>Rooms: {hotel.rooms}</p>
                      </div>
                  ))
              )}
          </section>

          <section className="why-travel-ease-container">
              <span className="why-travel-ease">
                  <h1>Why TravelEase</h1>
                  <h3>
                      TravelEase is your ultimate travel companion, making trip planning seamless and stress-free. Whether you're looking to book a cozy hotel, rent a bike for a quick city tour, or secure a car, bus, or train for your journey, TravelEase has got you covered.
                  </h3>
                  <button className="learn-more-btn">Learn More</button>
              </span>
          </section>
      </main>
      <Footer />
  </div>
);
}
export default Homepage;