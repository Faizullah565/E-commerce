import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NotFound = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          {/* Animated 404 Number */}
          <div 
            className="display-1 fw-bold text-primary mb-3"
            style={{
              background: 'linear-gradient(45deg, #3498db, #2c3e50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '8rem',
              fontFamily: 'monospace'
            }}
          >
            404
          </div>
          
          <h2 className="mb-4">Oops! Page Not Found</h2>
          
          <p className="lead mb-5 text-muted">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to shopping!
          </p>
          
          {/* Suggested Actions */}
          <Row className="mb-5">
            <Col md={4} className="mb-3">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="bi bi-house-door-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <Card.Title>Go Home</Card.Title>
                  <Card.Text>
                    Return to the homepage and continue browsing.
                  </Card.Text>
                  <LinkContainer to="/">
                    <Button variant="outline-primary" className="mt-2">Home</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-3">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="bi bi-grid-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <Card.Title>Continue Shopping</Card.Title>
                  <Card.Text>
                    Browse our collection of products and find what you need.
                  </Card.Text>
                  <LinkContainer to="/shop">
                    <Button variant="outline-primary" className="mt-2">Shop Now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-3">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="bi bi-headset text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <Card.Title>Get Help</Card.Title>
                  <Card.Text>
                    Contact our support team for assistance.
                  </Card.Text>
                  <LinkContainer to="/contact">
                    <Button variant="outline-primary" className="mt-2">Contact Us</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Search Bar */}
          <Card className="border-0 shadow-sm mb-5">
            <Card.Body className="p-4">
              <h5 className="mb-3">Can't find what you're looking for?</h5>
              <div className="d-flex">
                <input 
                  type="text" 
                  className="form-control me-2" 
                  placeholder="Search products..." 
                />
                <Button variant="primary">Search</Button>
              </div>
            </Card.Body>
          </Card>
          
          {/* Popular Products */}
          <div className="mb-4">
            <h5 className="mb-3">Popular Products</h5>
            <Row>
              {[
                { name: "Wireless Headphones", url: "/product/1" },
                { name: "Smartwatch Pro X", url: "/product/2" },
                { name: "Running Shoes", url: "/product/6" },
                { name: "Bluetooth Speaker", url: "/product/5" }
              ].map((product, index) => (
                <Col md={3} key={index} className="mb-2">
                  <LinkContainer to={product.url}>
                    <Button variant="outline-secondary" size="sm" className="w-100">
                      {product.name}
                    </Button>
                  </LinkContainer>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;