import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <ul >
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre mim</Link>
        </li>
        <li>
          <Link to="/contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
