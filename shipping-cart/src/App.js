import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartPage from './components/cartPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductCard />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
