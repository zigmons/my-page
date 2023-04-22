import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
      {/* <div>
          <Footer />
        </div> */}
    </Router>
    
  );
}

export default App;