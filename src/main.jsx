import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import OrderSuccess from './orderSuccess';
import OrderPage from './orderPage';
import './index.css';

function Main() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route path="/orderPage" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
