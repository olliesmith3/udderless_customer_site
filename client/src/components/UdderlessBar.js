import React, { useState } from 'react';
import InterestsBody from './InterestsBody';
import AboutUs from './AboutUs';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


const UdderlessBar = props => {

  const [showInterestsBody, setShowInterestsBody] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(true)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Udderless</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav >
          <Nav.Link onClick={() => setShowInterestsBody(!showInterestsBody)}>Register Interest</Nav.Link>
            <Nav.Link onClick={() => setShowAboutUs(!showAboutUs)}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      { showInterestsBody && <InterestsBody />}
      { showAboutUs && <AboutUs />}
    </div>
  )
}

export default UdderlessBar;
