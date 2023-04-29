import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Login from './components/Login';
import Cadastro from './components/Cadastro';

import './App.css'


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar className="navbar"/> 
        <Routes>
          <Route path="/my-page" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Cadastro />} />
        </Routes>

      </div>
      <div>
          <Footer />
        </div>
    </Router>
    
  );
}

export default App;
