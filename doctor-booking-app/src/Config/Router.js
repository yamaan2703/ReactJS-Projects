import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Details from "../Screens/Details";
import BookingDashboard from "../Screens/BookingDashboard";
import AppNavbar from "../Components/AppNavbar"
import DoctorPg from "../Screens/DoctorPg";
import CreateDrProfile from "../Screens/CreateDrProfile";

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
            <Route path="/doctorpage" element={<DoctorPg />} />
            <Route path="/bookingdashboard" element={<BookingDashboard />} />
            <Route path="/createdoctorprofile" element={<CreateDrProfile />} />

        </Routes>
        </BrowserRouter>
        </>
    )
}