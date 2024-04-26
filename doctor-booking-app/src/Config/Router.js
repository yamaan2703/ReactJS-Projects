import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Details from "../Screens/Details";
import BookingDashboard from "../Screens/BookingDashboard";
import Dentist from "../Screens/Dentist";
import AppNavbar from "../Components/AppNavbar"

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/bookingdashboard" element={<BookingDashboard />} />
            <Route path="/dentist" element={<Dentist />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}