import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from '../components/AppNavbar'
import Home from "../pages/Home";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}