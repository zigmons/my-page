// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'
// import Button from 'react-bootstrap/Button';
// import { useAuth } from '../AuthContext';

// function Navbar() {
//   const { isAuthenticated, setIsAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
// <nav className='navbar'>
//   <ul>
//     <li>
//       <Link to="/">Início</Link>
//     </li>
//     <li>
//       <Link to="/about">Sobre mim</Link>
//     </li>
//     <li>
//       <Link to="/contact">Contatos</Link>
//     </li>
//     <li className="spacer"></li>
//   </ul>
//   <div className="buttons">
//     {isAuthenticated ? (
//       <>
//         <Button>
//           <Link className = 'button-download'to="/download">Download</Link>
//         </Button>
//         <Button onClick={handleLogout}>Logout</Button>
//       </>
//     ) : (
//       <>
//         <Button className="Login">
//           <Link to="/login" >
//             Login
//           </Link>
//         </Button>
//         <Button className="cadastro">
//           <Link to="/signup">Cadastre-se</Link>
//         </Button>
//       </>
//     )}
//   </div>
// </nav>

//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { useAuth } from '../AuthContext';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, logOutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logOutUser(); 
    navigate(location.pathname);
  }

  return (
    <BootstrapNavbar bg="" variant="dark" expand="lg" className="navbar">
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Sobre mim
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contatos
            </Nav.Link>
          </Nav>
          <div className="buttons">
            {isAuthenticated ? (
              <>
                <Button>
                  <Link className="button-download" to="/download">
                    Download
                  </Link>
                </Button>
                <Button>
                  <Link className="button-download" to="/alterar-senha">
                    Alterar Senha
                  </Link>
                </Button>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button className="Login">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="cadastro">
                  <Link to="/signup">Cadastre-se</Link>
                </Button>
              </>
            )}
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
