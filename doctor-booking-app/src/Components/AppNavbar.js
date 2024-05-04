import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import AppCard from "./AppCard";
import AppUserCard from "./AppUserCard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isUserCardOpen, setIsUserCardOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openUserCard = () => {
    setIsUserCardOpen(true);

  };

  const closeUserCard = () => {
    setIsUserCardOpen(false);
  };

  return (
    <nav
      className={`py-2 fixed top-0 w-full z-10 transition-all shadow-xl ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center sm:justify-center ">
        <div className="flex justify-between items-center">
          <Link to="/" className=" font-bold text-xl">
            <img className="h-[50px]" src={logo} alt="Logo" />
          </Link>

          {/* Render button for mobile screens */}
          <button
            className="lg:hidden text-blue-500 font-bold p-2 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex lg:items-center sm:flex-column">
          {[
            { to: "/home", label: "Home" },
            { to: "/", label: "Explore" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-blue-500 p-1 text-xl font-semibold mx-3 hover:text-blue-900 ${
                location.pathname === item.to && "text-blue-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Sidebar for mobile screens */}
        <div
          className={`${
            isOpen ? "fixed" : "hidden"
          } inset-0 bg-gray-100 bg-opacity-50 z-50 w-full h-full lg:hidden`}
          onClick={toggleNavbar}
        ></div>

        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } bg-white w-64 h-full fixed overflow-auto ease-in-out transition-all duration-300 z-50 lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button className="focus:outline-none" onClick={toggleNavbar}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="px-4 py-8">
            <div className="flex flex-col space-y-4">
              <Link
                to="/home"
                className={`text-blue-500 p-1 text-xl font-semibold hover:text-blue-900 ${
                  location.pathname === "/home" && "text-blue-900"
                }`}
              >
                Home
              </Link>
              <Link
                to="/"
                className={`text-blue-500 p-1 text-xl font-semibold hover:text-blue-900 ${
                  location.pathname === "/" && "text-blue-900"
                }`}
              >
                Explore
              </Link>
              <Link
                to="/contact"
                className={`text-blue-500 p-1 text-xl font-semibold hover:text-blue-900 ${
                  location.pathname === "/contact" && "text-blue-900"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        
        {/* <div
          className="icon text-3xl text-blue-500 mx-5 relative"
          onMouseEnter={isUserCardOpen ? <AppUserCard /> : ""} 
          onMouseLeave={closeUserCard}
        >
          <FaUserCircle />
          
           {isUserCardOpen && <AppUserCard />}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
