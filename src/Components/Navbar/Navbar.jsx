import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavbarComponent = () => {
  return (
    <Navbar fixed="top" className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">isOdd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Docs</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavbarComponent
