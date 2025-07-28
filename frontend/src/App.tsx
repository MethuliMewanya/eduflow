//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Header from '../src/components/Header';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Contact from '../src/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
