import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/Checkout/CheckoutPage'; // Adicione a importação da página de Checkout

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductDetails />} /> {/* Página inicial */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Página de checkout */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
