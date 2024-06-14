import React from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/inc/Navbar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
    
  );
}

export default App;
