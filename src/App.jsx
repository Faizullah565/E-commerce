import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "electronics",
    rating: 4.5,
    reviews: 120,
    description: "High-quality wireless headphones with noise cancellation and 20-hour battery life. Perfect for music lovers and professionals who need focus.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Smartwatch Pro X",
    price: 129.99,
    category: "electronics",
    rating: 4.7,
    reviews: 89,
    description: "Advanced smartwatch with fitness tracking, waterproof design, and 7-day battery life. Stay connected and monitor your health effortlessly.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 19.99,
    category: "clothing",
    rating: 4.2,
    reviews: 56,
    description: "100% cotton t-shirt with a comfortable fit. Available in multiple colors. Perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 34.99,
    category: "accessories",
    rating: 4.4,
    reviews: 78,
    description: "Genuine leather wallet with multiple card slots and cash compartment. Durable and stylish.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550599112-0c21a831f6b9?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 49.99,
    category: "electronics",
    rating: 4.3,
    reviews: 134,
    description: "Portable Bluetooth speaker with 10-hour battery life and rich sound quality. Perfect for outdoor activities.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1545454675322-d9f0b81da4e8?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 79.99,
    category: "clothing",
    rating: 4.6,
    reviews: 201,
    description: "Lightweight running shoes with cushioned soles for maximum comfort. Ideal for athletes and casual runners.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 24.99,
    category: "accessories",
    rating: 4.1,
    reviews: 67,
    description: "UV-protection sunglasses with polarized lenses. Stylish and functional for sunny days.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Backpack",
    price: 44.99,
    category: "accessories",
    rating: 4.5,
    reviews: 98,
    description: "Durable backpack with laptop compartment and multiple pockets. Perfect for work or travel.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 29.99,
    category: "electronics",
    rating: 4.0,
    reviews: 45,
    description: "LED desk lamp with adjustable brightness and color temperature. Ideal for reading or working.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531171371913-27ba14c46580?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 14.99,
    category: "accessories",
    rating: 4.4,
    reviews: 112,
    description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Eco-friendly and durable.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 22.99,
    category: "accessories",
    rating: 4.3,
    reviews: 76,
    description: "Non-slip yoga mat with carrying strap. Perfect for yoga, pilates, or exercise routines.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 12,
    name: "Phone Case",
    price: 12.99,
    category: "accessories",
    rating: 4.2,
    reviews: 189,
    description: "Protective phone case with shock absorption. Available for various phone models.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1601593346740-9b3b0a5c0134?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1605186649394-bd15cee79eb4?w=500&h=500&fit=crop"
    ]
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const placeOrder = (orderData) => {
    // In a real app, you would send this data to a backend
    console.log("Order placed:", orderData, cartItems);
    setCartItems([]); // Clear cart after order
  };

  const featuredProducts = products.slice(0, 3);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header cartItems={cartItems} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home featuredProducts={featuredProducts} />} />
            <Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
            <Route path="/product/:id" element={
              <ProductDetail products={products} addToCart={addToCart} />
            } />
            <Route path="/cart" element={
              <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            } />
            <Route path="/checkout" element={
              <Checkout cartItems={cartItems} placeOrder={placeOrder} />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;