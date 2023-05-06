import Nav from 'react-bootstrap/Nav';

function NavbarAbout() {
  return (
    <Nav
    >
      <Nav.Item>
        <Nav.Link href="#carrer">Carreira</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#hobbies">Hobby</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavbarAbout;