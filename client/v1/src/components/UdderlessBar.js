import React, { useState } from 'react';
import InterestsBody from './InterestsBody';
import AboutUs from './AboutUs';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/stylesheets/UdderlessBar.css';
import Udderless1 from '../assets/images/Udderless1.png';

const UdderlessBar = props => {

  const [showInterestsBody, setShowInterestsBody] = useState(false)
  const [showAboutUs, setShowAboutUs] = useState(true)

  const handleClickAboutUs = () => {
    setShowAboutUs(true)
    setShowInterestsBody(false)
  };

  const handleClickRegInt = () => {
    setShowAboutUs(false)
    setShowInterestsBody(true)
  };

  return (
    <div>
      <div className="NavBar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand ><img src={Udderless1} alt="udderless-1" className="udderless-brand" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav >
              {showAboutUs && <Nav.Link className="interest-link" onClick={handleClickRegInt}>Register Interest</Nav.Link>}
              {showInterestsBody && <Nav.Link className="about-link" onClick={handleClickAboutUs}>About Us</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        { showInterestsBody && <InterestsBody />}
        { showAboutUs && <AboutUs />}
      </div>
    </div>
  )
}

export default UdderlessBar;
