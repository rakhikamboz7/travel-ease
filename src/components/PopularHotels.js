import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PopularHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use effect to fetch data
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                // Dummy API call (replace with a real API endpoint that includes hotel images)
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');

                // Example: Assume you have a separate API to fetch images
                const hotelsData = response.data.map(user => ({
                    id: user.id,
                    name: user.name,
                    address: `${user.address.street}, ${user.address.city}`,
                    image: `https://via.placeholder.com/100x100?text=${encodeURIComponent(user.name)}` // Using placeholder images
                }));
                setHotels(hotelsData);
            } catch (err) {
                setError('Failed to fetch hotels');
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    // Show loading state or error message
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Popular Hotels</h2>
            <div className="hotel-grid">
                {hotels.map(hotel => (
                    <div key={hotel.id} className="hotel-card">
                        <img src={hotel.image} alt={`${hotel.name} image`} className="hotel-image" />
                        <div className="hotel-details">
                            <h3 className="hotel-name">
                                <span>{hotel.name}</span>
                            </h3>
                            <p className="hotel-address">{hotel.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularHotels;