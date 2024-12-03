import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Your Header component
import Homepage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import SearchBar from './components/SearchBar';
import HotelResults from './components/HotelResults';
 

const App = () => {
    return (
        <Router>
                     <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Login />} />            
     
        <Route path="/" element={<SearchBar />} />
        <Route path="/hotels" element={<HotelResults />} />
    
            </Routes>
        </Router>
    );
};

export default App;
