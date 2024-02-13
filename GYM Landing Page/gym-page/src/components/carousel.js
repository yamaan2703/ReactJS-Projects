import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery4.png';
import gallery5 from '../images/gallery5.png';

const Carousel = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed
  };

  const renderImage = () => {
    return images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`gallery-${index}`} className="carousel-image" />
      </div>
    ));
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {renderImage()}
      </Slider>
    </div>
  );
};

export default Carousel;
