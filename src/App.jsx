import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fix import path
import Home from "./pages/home";
import OrderPage from "./pages/orderPage"; // Import missing components
import OrderSuccess from "./pages/orderSuccess";
import { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState({})
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderPage" element={<OrderPage  setOrderData={setOrderData}/>} />
        <Route path="/orderSuccess" element={<OrderSuccess orderData={orderData}/>} />
      </Routes>
    </Router>
  );
}

export default App;
