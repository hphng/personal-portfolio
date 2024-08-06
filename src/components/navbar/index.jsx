import React from 'react'
import './index.css'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <Navbar sticky="top" expand="md" className="bg-dark-subtle justify-content-end">
          <Navbar.Brand className="name" href="#home">Henry Phung</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#home">Experience</Nav.Link>
              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
