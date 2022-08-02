import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/account">Account</Link>
            <Link className='nav-link' to="/services">Services</Link>
            <Link className='nav-link' to="/about-us">About us</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp