import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    
    return (
        <Slider {...settings}>
            <div className='container'>
                <div>
                    <div>
                        <img src='https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg'/>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default MySlider;
