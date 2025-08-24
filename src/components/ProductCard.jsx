import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <Card className="h-100 product-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <Badge 
          bg="danger" 
          className="position-absolute top-0 end-0 m-2"
        >
          Sale
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="h6" style={{ flex: 1 }}>
            {product.name}
          </Card.Title>
          <Badge bg="outline-secondary" text="dark" className="ms-2">
            {product.category}
          </Badge>
        </div>
        <div className="d-flex align-items-center mb-2">
          <Badge bg="warning" text="dark" className="me-2">
            {product.rating} ★
          </Badge>
          <small className="text-muted">({product.reviews} reviews)</small>
        </div>
        <Card.Text className="text-primary fw-bold mb-3">
          ${product.price}
        </Card.Text>
        <div className="mt-auto d-grid gap-2">
          <LinkContainer to={`/product/${product.id}`}>
            <Button variant="outline-primary" size="sm">
              View Details
            </Button>
          </LinkContainer>
          <Button variant="primary" size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;