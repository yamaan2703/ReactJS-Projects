import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { totalQuantity } = useSelector((state) => state.allcarts);

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
      className={`py-1 fixed top-0 w-full z-10 transition-all ${
        isScrolled ? "bg-[#171819]" : "bg-transparent"
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
              { label: "Menu", dropdown: true },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <div
                key={item.to}
                className="relative lg:ml-6 mt-2 lg:mt-0"
                onMouseEnter={() => {
                  if (item.dropdown) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.dropdown) setIsDropdownOpen(false);
                }}
              >
                <Link
                  to={item.to}
                  className={`text-white rounded-md px-3 py-2 text-lg font-medium hover:text-[#c9ab81] ${
                    location.pathname === item.to ? "text-[#c9ab81]" : "" // Condition for active link
                  }`}
                >
                  {item.label}
                </Link>{" "}
                {item.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-[#0f1d22] w-[100px] rounded-md shadow-lg">
                    <Link
                      to="/fastfood"
                      className="block px-4 py-2 text-white hover:bg-[#c9ab81] text-md"
                    >
                      Fast Food
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
          <div className="px-3 text-white hover:text-[#c9ab81] transition duration-500 relative">
            <Link to="/cartpage">
              <FaShoppingCart className="text-3xl" />
              {totalQuantity > 0 && (
                <p className="bg-red-500 text-center rounded-full absolute bottom-3 left-2 w-[20px] text-sm">
                  {totalQuantity}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
