import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

const SearchBar = () => {
  const [location] = useState({ lat: 28.6139, lng: 77.2090 }); // Default location for the map
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bookingType, setBookingType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const [rooms, setRooms] = useState('');

  const handleBookingType = (type) => {
    setBookingType(type);
  };

  const handleMapClick = (e) => {
    setSelectedLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const handlePlaceSelected = (autocomplete) => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const { lat, lng } = place.geometry.location;
      setSelectedLocation({
        lat: lat(),
        lng: lng(),
      });
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-buttons">
        <button onClick={() => handleBookingType('Hotel')}>Hotels</button>
        <button onClick={() => handleBookingType('Bus')}>Bus</button>
        <button onClick={() => handleBookingType('Cabs')}>Cabs</button>
        <button onClick={() => handleBookingType('Trains')}>Trains</button>
      </div>

      <div className="searchbar-fields">
        {bookingType === 'Hotel' && (
          <>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <Autocomplete onPlaceChanged={() => handlePlaceSelected(this.autocomplete)} onLoad={autocomplete => this.autocomplete = autocomplete}>
                <input type="text" placeholder="Destination" />
              </Autocomplete>
            </LoadScript>

            <input
              type="date"
              placeholder="Check In"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check Out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Travelers"
              value={travelers}
              min="1"
              max="100"
              onChange={(e) => setTravelers(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rooms"
              value={rooms}
              min="1"
              max="100"
              onChange={(e) => setRooms(e.target.value)}
            />
          </>
        )}
      </div>

      <div style={{ height: '400px', width: '100%', marginTop: '60px' }}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            zoom={10}
            center={location}
            onClick={handleMapClick}
          >
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default SearchBar;
