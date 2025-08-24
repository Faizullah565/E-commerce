import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a leading e-commerce platform offering the best products at competitive prices with excellent customer service.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/shop" className="text-light">Shop</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <address>
              <strong>E-Shop</strong><br />
              123 Main Street #40,<br />
              Islamabad, Pakistan<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890<br />
              <abbr title="Email">E:</abbr> info@eshop.com
            </address>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">&copy; 2025 E-Shop. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;