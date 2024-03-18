import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const data = [
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg",
      heading: "Greek Salaad",
      text: "Text 1",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg",
      heading: "Heading 2",
      text: "Text 2",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-13.def913c8d8e23413a075.jpg",
      heading: "Heading 3",
      text: "Text 3",
    },
    {
      imageUrl:
        "https://mediacity.co.in/delici/static/media/menu-image-14.cc993aeb8cae1e7c3ae7.jpg",
      heading: "Heading 4",
      text: "Text 4",
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider-container p-5">
      <Slider {...settings}>
        {data.map((item, index) => (
            <div key={index} className="text-white text-center p-2 shadow-xl m-2 shadow-[#e4c590]">
            <div className="flex justify-center">
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
            </div>
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
          </div>
        ))}
        </Slider>
        </div>
    
    </>
  );
}

export default MySlider;
