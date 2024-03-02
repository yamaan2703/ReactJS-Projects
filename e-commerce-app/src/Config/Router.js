import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Navbar from "../Components/Navbar";
import About from "../Screens/About";
import Menu from "../Screens/Menu";
import Contact from "../Screens/Contact";
import CartPage from "../Screens/CartPage";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cartpage" element={<CartPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}