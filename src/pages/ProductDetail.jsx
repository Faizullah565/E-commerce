import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);

  if (!product) {
    return <Container className="my-5"><h2>Product not found</h2></Container>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Product Images */}
        <Col md={6}>
          <Image src={mainImage} fluid className="mb-3" />
          <Row>
            {product.images.map((img, index) => (
              <Col xs={3} key={index}>
                <Image 
                  src={img} 
                  fluid 
                  className={mainImage === img ? 'border border-primary' : 'border'} 
                  onClick={() => setMainImage(img)}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        </Col>
        
        {/* Product Details */}
        <Col md={6}>
          <h1>{product.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <Badge bg="warning" text="dark" className="me-2">
              {product.rating} ★
            </Badge>
            <span className="text-muted">({product.reviews} reviews)</span>
          </div>
          <h3 className="text-primary mb-3">${product.price}</h3>
          <p>{product.description}</p>
          
          {/* Quantity Selector */}
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Select 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              style={{ width: '100px' }}
            >
              {[...Array(10).keys()].map(x => (
                <option key={x + 1} value={x + 1}>{x + 1}</option>
              ))}
            </Form.Select>
          </Form.Group>
          
          <Button variant="primary" size="lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;