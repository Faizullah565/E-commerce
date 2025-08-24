import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      
      {showAlert && (
        <Alert variant="success" className="mb-4">
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      )}
      
      <Row>
        <Col md={8}>
          <Card className="p-4 mb-4">
            <h3 className="mb-4">Send us a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Your Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Subject *</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="p-4 mb-4">
            <h4 className="mb-4">Contact Information</h4>
            <div className="mb-4">
              <h5>Address</h5>
              <p>
                123 Main Street #40,
                Islamabad, Pakistan<br />
                44000
              </p>
            </div>
            <div className="mb-4">
              <h5>Phone</h5>
              <p>+92 (123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h5>Email</h5>
              <p>info@eshop.com</p>
            </div>
            <div>
              <h5>Business Hours</h5>
              <p>
                Monday-Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </Card>
          
          <Card className="p-4">
            <h4 className="mb-4">Follow Us</h4>
            <div className="d-flex gap-3">
              <Button variant="outline-primary" className="rounded-circle">
                <i className="bi bi-facebook"></i>
              </Button>
              <Button variant="outline-info" className="rounded-circle">
                <i className="bi bi-twitter"></i>
              </Button>
              <Button variant="outline-danger" className="rounded-circle">
                <i className="bi bi-instagram"></i>
              </Button>
              <Button variant="outline-primary" className="rounded-circle">
                <i className="bi bi-linkedin"></i>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* Map Section */}
      <Row className="mt-5">
        <Col>
          <h3 className="mb-4">Find Us</h3>
          <div 
            className="bg-light rounded" 
            style={{ height: '400px' }}
          >
            {/* In a real application, you would embed a Google Map here */}
            <div 
              className="d-flex justify-content-center align-items-center h-100"
              style={{ backgroundColor: '#e9ecef' }}
            >
              <div className="text-center">
                <i className="bi bi-map" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                <p className="mt-3 text-muted">Map would be embedded here</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;