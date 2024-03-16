import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import About from "../Pages/About";
// import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import Navbar from "../Components/Navbar";
import FasrFood from "../Pages/FasrFood";
import Desi from "../Pages/Desi";
import Dessert from "../Pages/Dessert";
import CartPage from "../Pages/CartPage";

function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/fastfood" element={<FasrFood />} />
        <Route path="/desi" element={<Desi />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/cartpage" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter