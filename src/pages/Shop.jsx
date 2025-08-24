import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Shop = ({ products, addToCart }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  const categories = ['all', 'electronics', 'clothing', 'accessories'];
  
  const filteredProducts = products.filter(product => 
    filter === 'all' || product.category === filter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      
      {/* Filters */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Category</Form.Label>
            <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Sort by</Form.Label>
            <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      {/* Products Grid */}
      <Row>
        {sortedProducts.map(product => (
          <Col md={4} lg={3} key={product.id} className="mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;