import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Us</h1>
      
      {/* Company Story Section */}
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Story</h2>
          <p className="lead">
            Founded in 2020, E-Shop started as a small passion project and has grown into a leading e-commerce platform.
          </p>
          <p>
            Our mission is to provide high-quality products at affordable prices while delivering exceptional customer 
            service. We believe that shopping online should be convenient, secure, and enjoyable for everyone.
          </p>
          <p>
            With thousands of satisfied customers and a growing product catalog, we're committed to continuously 
            improving your shopping experience.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Our team working together" 
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      {/* Values Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Our Values</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Quality" 
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <Card.Title>Quality</Card.Title>
                  <Card.Text>
                    We carefully select all our products to ensure they meet the highest quality standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Value" 
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <Card.Title>Value</Card.Title>
                  <Card.Text>
                    We offer competitive prices and regular discounts to provide the best value for our customers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Support" 
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <Card.Title>Support</Card.Title>
                  <Card.Text>
                    Our customer support team is available 24/7 to help with any questions or concerns.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Our Team</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=face" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Sarah Johnson</Card.Title>
                  <Card.Text className="text-muted">CEO & Founder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=face" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Michael Chen</Card.Title>
                  <Card.Text className="text-muted">Head of Operations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=face" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Emily Rodriguez</Card.Title>
                  <Card.Text className="text-muted">Marketing Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=face" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>David Kim</Card.Title>
                  <Card.Text className="text-muted">Customer Support Lead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="bg-light py-5 rounded shadow-sm">
        <Col md={3} className="text-center">
          <h3 className="text-primary display-4 fw-bold">10,000+</h3>
          <p className="fs-5">Happy Customers</p>
        </Col>
        <Col md={3} className="text-center">
          <h3 className="text-primary display-4 fw-bold">500+</h3>
          <p className="fs-5">Products</p>
        </Col>
        <Col md={3} className="text-center">
          <h3 className="text-primary display-4 fw-bold">50+</h3>
          <p className="fs-5">Employees</p>
        </Col>
        <Col md={3} className="text-center">
          <h3 className="text-primary display-4 fw-bold">24/7</h3>
          <p className="fs-5">Support</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;