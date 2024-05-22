import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavigationBar.css";

import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const navbarStyles = {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  };

  return (
    <div>
      {/* Navbar for larger devices */}
      <Navbar expand="md" style={navbarStyles} id="lgNavBar">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            className="logo-img" // Apply the CSS class to the logo
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Nav style={{ marginRight: "auto" }}>
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/explorementors">Explore Mentors</Link>

          {/* Featured menu with submenus */}
          <NavDropdown title="Featured" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Techtrend</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Freelancing</NavDropdown.Item>
          </NavDropdown>
          {/* End of Featured menu */}

          <Link to="/propilot">Pro Pilot</Link>
        </Nav>
        {/* Button with gradient background and hover effect */}
        <Nav>
        <div className="button-container">
  <button
    className="btn btn-primary"
    style={{
      background: "linear-gradient(to right, #ff8a00, #da1b60)",
      border: "none",
      padding: "6px 12px", // Decrease padding to make the button smaller
      borderRadius: "3px", // Adjust border radius as needed
      color: "#ffffff", // Change text color to white
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adjust box shadow if needed
      outline: "none",
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <i className="bx bx-search"></i> Registration &nbsp;
    <i className="bx bx-right-arrow-alt"></i>
  </button>
</div>

        </Nav>
      </Navbar>

      {/* Navbar for smaller devices */}
      <Navbar
        bg="primary"
        expand="md"
        className="d-md-none fixed-bottom"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Nav.Link href="#home">Mentors</Nav.Link>
        <Nav.Link href="#home">Live Events</Nav.Link>
        <Nav.Link href="#home">ProPilot</Nav.Link>
        <Nav.Link href="#home">Stories</Nav.Link>
        <Nav.Link href="#home">Dashboard</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
