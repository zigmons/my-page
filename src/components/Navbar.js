import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/my-page">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre mim</Link>
        </li>
        <li>
          <Link to="/contact">Contatos</Link>
        </li>
        <li className='navbar-login, Login'>
          <Button>
            <Link to="/login" className=''>Login</Link>
          </Button>
        </li>
        <li>
          <Button className='cadastro'>
            <Link to="/signup" >Cadastre-se</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
