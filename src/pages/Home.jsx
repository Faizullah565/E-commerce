import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = ({ featuredProducts }) => {
  return (
    <>
      {/* Hero Banner with Background Image */}
      <div 
        className="text-white py-5 mb-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR-54qySDqS469SdzscdMG7ydQQmcLCO6Qg&s')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Flat 20% Off on Electronics</h1>
              <p className="lead mb-4">Limited time offer. Shop now and save big on our premium electronics collection.</p>
              <LinkContainer to="/shop">
                <Button variant="light" size="lg" className="px-5 py-2">Shop Now</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className="mb-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {featuredProducts.map(product => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-primary fw-bold">${product.price}</Card.Text>
                  <div className="mt-auto">
                    <LinkContainer to={`/product/${product.id}`}>
                      <Button variant="primary" className="w-100">Shop Now</Button>
                    </LinkContainer>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;