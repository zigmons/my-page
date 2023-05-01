import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import { useAuth } from '../AuthContext';

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/my-page');
  };

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
        {isAuthenticated ? (
          <>
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
            <li>
              <Button>
                <Link to="/download">Download</Link>
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-login, Login">
              <Button>
                <Link to="/login" className="">
                  Login
                </Link>
              </Button>
            </li>
            <li>
              <Button className="cadastro">
                <Link to="/signup">Cadastre-se</Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
