import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
        isScrolled ? "bg-gray-700" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="">
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
          className={`lg:flex lg:items-center ${
            isOpen ? "flex" : "hidden"
          } sm:hidden mt-4`}
        >
          <div className="flex flex-col lg:flex-row py-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/menu", label: "Menu", dropdown: true },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <div
                key={item.to}
                className="relative lg:ml-6 mt-2 lg:mt-0"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  to={item.to}
                  className={`text-white rounded-md px-3 py-2 text-lg font-medium hover:text-[#c9ab81] ${
                    location.pathname === item.to && "text-[#c9ab81]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-[#0f1d22] w-[100px] rounded-md shadow-lg">
                    <Link
                      to="/fastfood"
                      className="block px-4 py-2 text-white hover:bg-[#c9ab81] "
                    >
                      Fast Food
                    </Link>
                    <Link
                      to="/desi"
                      className="block px-4 py-2 text-white hover:bg-[#c9ab81]"
                    >
                      Desi
                    </Link>
                    <Link
                      to="/dessert"
                      className="block px-4 py-2 text-white hover:bg-[#c9ab81]"
                    >
                      Dessert
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 sm:mt-3 lg:mt-0">
          <div>
            <Button label="Book a Table" />
          </div>
          <div className="px-3 text-white hover:text-[#c9ab81] transition duration-500">
            <Link to="/cartpage">
            <FaShoppingCart className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
