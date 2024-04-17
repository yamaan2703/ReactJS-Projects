import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav
      className={`p-2 fixed top-0 w-full z-10 transition-all ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="logo text-3xl font-bold text-blue-700">Health Care Center</h1>

        <button
          className="lg:hidden text-blue-700 focus:outline-none"
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

        <div
          className={`lg:flex lg:items-center sm:flex-col ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row py-1 justify-between">
            {[
              { to: "/home", label: "Home" },
              { to: "/explore", label: "Explore" },
              { to: "/contact", label: "Contact US" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-black rounded-md px-3 py-2 text-lg font-medium hover:text-blue-700 ${
                  location.pathname === item.to ? "text-blue-700" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="text-white bg-blue-500 p-2 rounded-full cursor-pointer"
            onClick={toggleNavbar}
          >
            <FaUser />
          </div>
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-blue-500 rounded-md shadow-lg">
              <Link
                to="/booking"
                className="block px-4 py-2 text-white hover:bg-blue-700 rounded-t-md"
              >
                Booking
              </Link>
              <Link
                to="/user"
                className="block px-4 py-2 text-white hover:bg-blue-700 rounded-b-md"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;

