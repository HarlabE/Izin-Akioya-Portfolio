import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar" variant="dark" sticky="top">
      <Container fluid className="navbar-container">
        <Navbar.Brand className="brand" href="#">
          IZIN AKIOYA
        </Navbar.Brand>
        <Navbar id="navbarScroll">
          <Nav
            className="ms-md-auto me-5 my-2 my-lg-0 gap-4 gap-sm-1 nav-items"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" className="nav_item" data-scroll-nav="0">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav_item">
              <Link to="/about" className="nav_item">
                About
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav_item"
              href="https://www.linkedin.com/in/izinakioya/"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ fontSize: "15px" }}
              />
            </Nav.Link>
            <Nav.Link
              className="nav_item"
              href="https://x.com/AkioyaIzin"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "15px" }} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;
