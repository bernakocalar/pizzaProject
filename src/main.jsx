import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import OrderPage from './orderPage';
import OrderSuccess from './orderSuccess';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orderPage" element={<OrderPage />} />
      <Route path="/orderSuccess" element={<OrderSuccess />} />
    </Routes>
  </Router>
);