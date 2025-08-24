import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, placeOrder }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });
  const [showAlert, setShowAlert] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(formData);
    setShowAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Checkout</h1>
      
      {showAlert && (
        <Alert variant="success" className="mb-4">
          Your order has been placed successfully! Redirecting to home page...
        </Alert>
      )}
      
      <Row>
        <Col md={8}>
          <Card className="p-4 mb-4">
            <h3 className="mb-4">Shipping Information</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              
              <h4 className="mt-4 mb-3">Payment Method</h4>
              <Form.Check
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                label="Credit/Debit Card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                label="Cash on Delivery"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
              />
              
              <Button type="submit" variant="primary" size="lg" className="mt-4">
                Place Order
              </Button>
            </Form>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="p-4">
            <h4 className="mb-4">Order Summary</h4>
            {cartItems.map(item => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;