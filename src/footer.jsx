import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FooterComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5173/subscribe", { email });
      alert("Email subscribed successfully");
      setEmail(""); // Check mo muna to
    } catch (error) {
      console.error("Error:", error.response.data.error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="parent" style={{ minHeight: "100vh" }}>
      <footer
        className="bg-dark text-white py-5"
        style={{
          position: "static",
          bottom: "0",
          left: "0",
          width: "100%",
          opacity: "0.7",
        }}
      >
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Workout
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="mb-4">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>123 Street, City,
                  Country
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2"></i>Phone: +123456789
                </li>
                <li>
                  <i className="bi bi-envelope-fill me-2"></i>Email:
                  info@example.com
                </li>
              </ul>
            </Col>
            <Col lg={6} className="text-center text-lg-start">
              <h5 className="mb-4">Subscribe to our newsletter</h5>
              <Form
                className="d-flex justify-content-center justify-content-lg-start"
                onSubmit={handleSubscribe}
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="me-2"
                  style={{ maxWidth: "300px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="outline-light" type="submit">
                  Subscribe
                </Button>{" "}
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="text-center p-3 bg-dark"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
