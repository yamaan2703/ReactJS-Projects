import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Navbar from "../Components/Navbar";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}