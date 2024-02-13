import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import Schedule from "../pages/schedule";
import Gallery from "../pages/Gallery";
import Contact from "../pages/contact";
import Navbar from "../components/navbar";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="service" element={<Service />}/>
            <Route path="schedule" element={<Schedule />}/>
            <Route path="gallery" element={<Gallery />}/>
            <Route path="contact" element={<Contact />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}