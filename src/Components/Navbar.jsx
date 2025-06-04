import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; 

const NavigationBar = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="me-auto brand ms-5"  >My Protfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ka">
          <Nav.Link href="#home" className="nav-link i">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link">About</Nav.Link>
          <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
