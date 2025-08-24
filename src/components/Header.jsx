import React from 'react';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ cartItems }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm border-bottom"
      style={{ 
        // background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
// WebkitBackgroundClip: 'text',
// WebkitTextFillColor: 'transparent',
        padding: '0.5rem 0'
      }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand 
            className="fw-bold fs-3" 
            style={{ 
              color: '#2c3e50',
              background: 'linear-gradient(45deg, #3498db, #2c3e50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <i className="bi bi-shop me-2"></i>
            E-Shop
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          style={{ border: 'none' }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ fontWeight: '500' }}>
            <LinkContainer to="/">
              <Nav.Link 
                className="mx-2 position-relative"
                style={{ 
                  color: '#2c3e50',
                  transition: 'all 0.3s ease'
                }}
                activeStyle={{
                  color: '#3498db',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-house-door me-1"></i>
                Home
                <span className="position-absolute bottom-0 start-50 translate-middle-x nav-underline"></span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/shop">
              <Nav.Link 
                className="mx-2 position-relative"
                style={{ 
                  color: '#2c3e50',
                  transition: 'all 0.3s ease'
                }}
                activeStyle={{
                  color: '#3498db',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-grid me-1"></i>
                Shop
                <span className="position-absolute bottom-0 start-50 translate-middle-x nav-underline"></span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/about">
              <Nav.Link 
                className="mx-2 position-relative"
                style={{ 
                  color: '#2c3e50',
                  transition: 'all 0.3s ease'
                }}
                activeStyle={{
                  color: '#3498db',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-info-circle me-1"></i>
                About
                <span className="position-absolute bottom-0 start-50 translate-middle-x nav-underline"></span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/contact">
              <Nav.Link 
                className="mx-2 position-relative"
                style={{ 
                  color: '#2c3e50',
                  transition: 'all 0.3s ease'
                }}
                activeStyle={{
                  color: '#3498db',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-telephone me-1"></i>
                Contact
                <span className="position-absolute bottom-0 start-50 translate-middle-x nav-underline"></span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link 
                className="position-relative mx-2"
                style={{ 
                  color: '#2c3e50',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-cart3 me-1" style={{ fontSize: '1.2rem' }}></i>
                Cart
                {cartItemsCount > 0 && (
                  <Badge 
                    bg="danger" 
                    className="position-absolute top-0 start-100 translate-middle"
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.35em 0.65em',
                      animation: 'pulse 1.5s infinite'
                    }}
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            
            <Button 
              variant="outline-primary" 
              className="ms-3 d-none d-lg-block"
              style={{
                borderRadius: '25px',
                padding: '0.5rem 1.5rem',
                fontWeight: '500',
                border: '2px solid #3498db',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="bi bi-person me-1"></i>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;