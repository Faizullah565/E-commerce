import React from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartItem from '../components/CartItem';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h3>Your cart is empty</h3>
          <LinkContainer to="/shop">
            <Button variant="primary" className="mt-3">Continue Shopping</Button>
          </LinkContainer>
        </div>
      ) : (
        <>
          <Table responsive striped className="align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  updateQuantity={updateQuantity} 
                  removeFromCart={removeFromCart} 
                />
              ))}
            </tbody>
          </Table>
          
          <Row className="mt-4">
            <Col md={6}></Col>
            <Col md={6}>
              <div className="border p-4">
                <h4>Order Summary</h4>
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
                <LinkContainer to="/checkout">
                  <Button variant="primary" className="w-100">Proceed to Checkout</Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;