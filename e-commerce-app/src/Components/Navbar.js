import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { IoNotificationsCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      className={`p-4 fixed top-0 w-full z-10 transition-all ${
        isScrolled ? "bg-[#0e0d0b]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
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

        <div
          className={`lg:flex lg:items-center sm:flex-column ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row py-3 justify-between">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/menu", label: "Menu" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-gray-300 rounded-md px-3 py-2 text-lg font-medium hover:text-[#e4c590] ${
                  location.pathname === item.to ? "text-[#e4c590]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-5xl md:text-2xl lg:text-5xl text-[#e4c590] flex items-center">
          <Link to="/cartpage" className="flex items-center relative">
            <IoNotificationsCircleSharp />
            <p className="text-sm text-white bg-red-500 rounded-full text-center h-[20px] w-[20px] absolute top-0">
              1
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
