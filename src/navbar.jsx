import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";

const NavbarComponent = () => {
  const { value } = useLocalStorage();
  return (
    <Navbar
      expand="lg"
      className="bg-dark"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 10 }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "auto", width: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ margin: "0 20%" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/login"
              variant="link"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff3e3e")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              Home
            </Nav.Link>
            <Button
              variant="link"
              href="#about"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff3e3e")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              About Us
            </Button>
            <Button
              variant="link"
              href="#gallery"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff3e3e")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              Contact
            </Button>
          </Nav>
          <Form className="d-flex">
            <Button
              as={Link}
              to="/login"
              variant="light"
              style={{ transition: "0.3s ease-in-out", marginRight: "10px" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#fff";
              }}
            >
              Login
            </Button>
            <Button
              as={Link}
              to="/register"
              variant="light"
              style={{ transition: "0.3s ease-in-out" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#fff";
              }}
            >
              Register
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
