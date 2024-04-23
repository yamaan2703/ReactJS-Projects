import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import AppDropdown from "./AppDropdown"; // Import the Dropdown component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
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
      className={`py-4 fixed top-0 w-full z-10 transition-all shadow-black ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-around lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="">
            <img className="h-[50px]" src={logo} alt="Logo" />
          </Link>

          <button
            className="lg:hidden text-[#ec193f] focus:outline-none"
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
              { to: "/service", label: "Service", dropdown: true }, 
              { to: "/offers", label: "Offers" },
              { to: "/pricing", label: "Pricing" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <div key={item.to} className="relative">
                <Link
                  to={item.to}
                  className={`text-black p-1 text-xl font-bold mx-3 hover:text-[#ec193f] ${
                    location.pathname === item.to && "text-[#ec193f]"
                  }`}
                  onClick={item.dropdown ? toggleNavbar : undefined}                 >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <AppDropdown
                  isOpen={isOpen}
                  onClose={closeNavbar}
                  services={[
                    { to: "/webdevelopment", label: "Web Development" },
                    { to: "/graphicsdesigning", label: "Graphics Designing" },
                    { to: "/socailmedia", label: "Social Media" },
                    { to: "/digitialmarketing", label: "Digitial Marketing" },
                    { to: "/2danimatedvideo", label: "2D Animated Video" },
                    { to: "/2d/3danimatedmodeling", label: "2D/3D Modeling" },
                    { to: "/contentwriting", label: "Content Writing" },
                    { to: "/seo", label: "SE0" },
                    { to: "/advertisement", label: "Advertisement" },
                    { to: "/getscanscanner", label: "Getscan AI Scanner" },
                  ]}
                />
                
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <button className="text-white bg-[#ec193f] px-5 py-3 rounded-3xl font-semibold">
              Schedule Consulation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
