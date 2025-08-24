import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img 
            src={item.image} 
            alt={item.name}
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
            className="me-3"
          />
          <div>
            <h6 className="mb-0">{item.name}</h6>
            <small className="text-muted">{item.category}</small>
          </div>
        </div>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <Form.Select 
          value={item.quantity} 
          onChange={handleQuantityChange}
          style={{ width: '80px' }}
        >
          {[...Array(10).keys()].map(x => (
            <option key={x + 1} value={x + 1}>{x + 1}</option>
          ))}
        </Form.Select>
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <Button 
          variant="outline-danger" 
          size="sm"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;