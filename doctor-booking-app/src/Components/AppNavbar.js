import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
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
      className={`p-4 fixed top-0 w-full z-10 transition-all shadow-xl  ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-around lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className=" font-bold text-xl">
            <img className="h-[50px]" src={logo} alt="Logo" />
          </Link>

          <button
            className="lg:hidden text-blue-900 focus:outline-none"
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
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row">
            {[
              { to: "/", label: "Home" },
              { to: "/", label: "Explore" },
              { to: "/", label: "Contact" },
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
        </div>

        <div>
          <div className="relative inline-block text-left">
            <div>
              <FaUserCircle
                className="text-white text-3xl cursor-pointer"
                onClick={toggleNavbar}
              />
            </div>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    to="/booking"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                    role="menuitem"
                  >
                    Booking
                  </Link>
                  <Link
                    to="/user"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                    role="menuitem"
                  >
                    User
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
