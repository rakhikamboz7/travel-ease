import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/HotelList.css';

const HotelResults = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    location: '',
    sortBy: ''
  });

  const fetchHotels = async (filterParams) => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/hotels", {
        params: filterParams
      });
      setHotels(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch hotels. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderFilters = () => (
    <div className="filters-section">
      <div className="filter-group">
        <input
          type="text"
          name="name"
          placeholder="Search by hotel name"
          value={filters.name}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          className="sort-select"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
        </select>
      </div>
    </div>
  );

  const renderHotelCard = (hotel) => (
    <div key={hotel.name} className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.images[0]} alt={hotel.name} />
      </div>
      <div className="hotel-details">
        <h2>{hotel.name}</h2>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          {hotel.location.city}, {hotel.location.address}
        </div>
        <div className="rating">
          Rating: {hotel.rating} ⭐
        </div>
        <div className="price">
          ₹{hotel.price} per night
        </div>
        <p className="description">{hotel.description}</p>
        <div className="amenities">
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="hotel-list-page">
      <h1>Available Hotels</h1>
      
      {renderFilters()}

      {loading && <div className="loading">Loading hotels...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="hotels-grid">
        {hotels.map(renderHotelCard)}
      </div>
    </div>
  );
};

export default HotelResults;

