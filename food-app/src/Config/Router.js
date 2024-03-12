import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import Navbar from "../Components/Navbar";

function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter