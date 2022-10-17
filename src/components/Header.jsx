import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Link to="/" className="navbar-brand">
            Booking
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>

              <Link to="/register" className="nav-link">
                Regsiter
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
