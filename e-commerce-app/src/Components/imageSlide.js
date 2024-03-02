import React, { useState, useEffect } from "react";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import logo from "../images/logo.png";
import iconImage from "../images/icon.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import WebBtn from "./WebBtn";
import Button from "./WebBtn";

const images = [bg1, bg2, bg3];
const texts = [
  "Embark on a culinary journey: Where flavors come alive.",
  "Savor exceptional cuisine at our high-quality restaurant.",
  "Enjoy unparalleled hospitality at our restaurant.",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <button
        className="absolute inset-y-0 left-0 z-10 text-4xl m-1 text-white p-1"
        onClick={prevSlide}
      >
        <IoIosArrowDropleftCircle className="text-[#e4c590]" />
      </button>
      <button
        className="absolute inset-y-0 right-0 z-10 text-4xl m-1 text-white p-1"
        onClick={nextSlide}
      >
        <IoIosArrowDroprightCircle className="text-[#e4c590]" />
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#e4c590] text-center">
            <p className="tracking-widest text-center text-sm md:text-sm lg:text-lg">
              DELIGHTFUL EXPERIENCE
            </p>
            <div className="">
              <img className="h-4 w-full my-2" src={iconImage} alt="Logo" />
            </div>
            <div className="text-white text-3xl md:text-3xl lg:text-5xl font-serif py-2">
              {texts[index]}
            </div>
            <div className="mt-5">
              <WebBtn label="View Menu" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
