// SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    location: ''
  });
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to hotels list page with search params
    navigate('/hotels', { 
      state: { 
        name: searchParams.name, 
        location: searchParams.location 
      } 
    });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit}>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Search by hotel name"
            value={searchParams.name}
            onChange={(e) => setSearchParams(prev => ({
              ...prev,
              name: e.target.value
            }))}
            className="search-input"
          />
          <input
            type="text"
            placeholder="Search by location"
            value={searchParams.location}
            onChange={(e) => setSearchParams(prev => ({
              ...prev,
              location: e.target.value
            }))}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

 