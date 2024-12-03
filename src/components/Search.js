// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HotelList = () => {
//   const [hotels, setHotels] = useState([]);
//   const [searchName, setSearchName] = useState('');
//   const [searchLocation, setSearchLocation] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchHotels = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:5000/api/hotels", {
//         params: { 
//           name: searchName, 
//           location: searchLocation 
//         },
//       });
//       setHotels(response.data);
//     } catch (error) {
//       console.error('Error fetching hotels:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search handler
//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchHotels();
//   };

//   // Initial fetch on component mount
//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   return (
//     <div>
//       {/* Search Form */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search by hotel name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search by location"
//           value={searchLocation}
//           onChange={(e) => setSearchLocation(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Loading State */}
//       {loading && <p>Loading...</p>}

//       {/* Hotels List */}
//       <div className="hotels-grid">
//         {hotels.map((hotel) => (
//           <div key={hotel._id} className="hotel-card">
//             <img src={hotel.images[0]} alt={hotel.name} />
//             <h3>{hotel.name}</h3>
//             <p>Location: {hotel.location.city}</p>
//             <p>Price: ₹{hotel.price}</p>
//             <p>Rating: {hotel.rating}</p>
//             <div className="amenities">
//               <h4>Amenities:</h4>
//               <ul>
//                 {hotel.amenities.map((amenity, index) => (
//                   <li key={index}>{amenity}</li>
//                 ))}
//               </ul>
//             </div>
//             <p>{hotel.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotelList;
