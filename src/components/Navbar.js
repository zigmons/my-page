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
    navigate('/');
  };

  return (
<nav className='navbar'>
  <ul>
    <li>
      <Link to="/">Início</Link>
    </li>
    <li>
      <Link to="/about">Sobre mim</Link>
    </li>
    <li>
      <Link to="/contact">Contatos</Link>
    </li>
    <li className="spacer"></li>
  </ul>
  <div className="buttons">
    {isAuthenticated ? (
      <>
        <Button>
          <Link className = 'button-download'to="/download">Download</Link>
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </>
    ) : (
      <>
        <Button className="Login">
          <Link to="/login" >
            Login
          </Link>
        </Button>
        <Button className="cadastro">
          <Link to="/signup">Cadastre-se</Link>
        </Button>
      </>
    )}
  </div>
</nav>

  );
}

export default Navbar;
