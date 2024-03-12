import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import logo from "../images/logo.png";
import iconImage from "../images/iconImage.svg";
import Button from "./Button";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const images = [bg1, bg2, bg3];
const texts = [
  "Embark on a culinary journey: Where flavors come alive.",
  "Savor exceptional cuisine at our high-quality restaurant.",
  "Enjoy unparalleled hospitality at our restaurant.",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <button
        className="absolute inset-y-0 left-0 z-10 text-4xl m-1 text-white p-1"
        onClick={prevSlide}
      >
        <IoIosArrowDropleftCircle className="text-[#c9ab81]" />
      </button>
      <button
        className="absolute inset-y-0 right-0 z-10 text-4xl m-1 text-white p-1"
        onClick={nextSlide}
      >
        <IoIosArrowDroprightCircle className="text-[#c9ab81]" />
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#c9ab81] text-center">
            <p className="tracking-widest text-center text-lg md:text-lg lg:text-xl">
              DELIGHTFUL EXPERIENCE
            </p>
            <div className="">
              <img className="h-4 w-full my-2" src={iconImage} alt="Icon" />
            </div>
            <div className="text-white text-3xl md:text-3xl lg:text-5xl font-serif py-2">
              {texts[index]}
            </div>
            <div className="mt-5">
              <Link to="/menu">
                <Button label="View Menu" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
