import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 fixed top-0 w-full z-10 transition-all ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-around lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </Link>

          <button
            className="lg:hidden text-white focus:outline-none"
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

        <div
          className={`lg:flex lg:items-center sm:flex-column ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row py-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/service", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-gray-300 rounded-md px-3 py-2 text-lg font-medium hover:text-red-500 ${
                  location.pathname === item.to && "text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
