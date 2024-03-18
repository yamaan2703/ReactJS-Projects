import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

function MySlider() {
  const data = [
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg",
      heading: "Greek Salad",
      text: "Avacados with crab meat, red onion, crab salad, red bell pepper",
      price: "$ 39.00",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      heading: "Tokusen Wagyu",
      text: "Avacados with crab meat, red onion, crab salad, red bell pepper",
      price: "$ 41.00",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-13.def913c8d8e23413a075.jpg",
      heading: "Butternut Pumpkin",
      text: "Avacados with crab meat, red onion, crab salad, red bell pepper",
      price: "$ 44.00",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-14.cc993aeb8cae1e7c3ae7.jpg",
      heading: "OPu Fish",
      text: "Avacados with crab meat, red onion, crab salad, red bell pepper",
      price: "$ 49.00",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container p-5 md:p-4 lg:p-5 text-center">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="text-white text-center p-2 md:p-2 lg:p-0 shadow-xl m-0 md:m-0 lg:m-2 shadow-[#e4c590]"
            >
              <div className="flex justify-center">
                <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
              </div>
              <h1 className="text-2xl font-serif py-2 text-[#e4c590]">
                {item.heading}
              </h1>
              <p className="text-gray-400 italic py-2">{item.text}</p>
              <p className="text-2xl">{item.price}</p>
            </div>
          ))}
        </Slider>

        <div className="mt-5">
          <Button label="View menu" />
        </div>
      </div>
    </>
  );
}

export default MySlider;
