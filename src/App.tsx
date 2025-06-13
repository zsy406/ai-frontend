import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <div className="app">
      <h1>My E-commerce App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/user">User</a></li>
        </ul>
      </nav>
    </div>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/cart" element={<CartPage />} />
    //     <Route path="/orders" element={<OrderPage />} />
    //     <Route path="/products" element={<ProductPage />} />
    //     <Route path="/user" element={<UserPage />} />
    //   </Routes>
    // </Router>
  );
};

export default App;