import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/about-us'>About Us</Link>
            <Link className="nav-link" to='/contact-us'>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;