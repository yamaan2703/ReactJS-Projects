import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screens/admin";
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import Institute from "../screens/institute";

export default function AppRouter () {
    return (
        <>
       <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="admin/*" element={<Admin />} />
            <Route path="institute/*" element={<Institute />} />
        </Routes>
       </Router>
        </>
    )
}