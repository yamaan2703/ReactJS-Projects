import React from "react";
import ImageSlider from "../Components/ImageSlider";
import About from "./About";
import iconImage from "../images/iconImage.svg";
import Slider from "../Components/Slider";
import MySlider from "../Components/Slider";

function Home() {
  return (
    <>
      <div className="bg-[#0f1d22]">
        <ImageSlider />

        {/* Top Notch Start */}
        <div className="home_section1">
          <div className="container py-10">
            <div className="text-center text-white w-full md:w-full lg:w-[700px] mx-auto pb-2">
              <p className="text-lg md:text-lg lg:text-xl tracking-widest">
                FLAVORS FOR ROYALTY
              </p>
              <div className="flex justify-center py-1">
                <img src={iconImage} className="w-[100px]" />
              </div>
              <h1
                style={{
                  fontFamily: "Protest Riot, sans-serif",
                  // fontWeight: 400,
                  fontStyle: "normal",
                }}
                className="text-3xl md:text-3xl lg:text-6xl text-[#e4c590] py-2"
              >
                We Offer Top Notch
              </h1>
              <p className="text-gray-400 italic py-2">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book It has survived not
                only five centuries, but also the leap into.
              </p>
            </div>
            <div className="row m-0 p-0">
              <div className="col-md-4">
                <div className="text-white text-center my-2">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/offer-image-1.c020474aea0ed9a09d2a.jpg" />
                  </div>
                  <h1 className="py-2 text-3xl font-serif italic">Breakfast</h1>
                  <p
                    className="text-md py-1 tracking-widest text-[#e4c590] hover:font-bold cursor-pointer"
                    onClick={() => {
                      window.location.href = "/fastfood";
                    }}
                    style={{ transition: "1s" }}
                  >
                    VIEW MENU
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-white text-center my-2">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg" />
                  </div>
                  <h1 className="py-2 text-3xl font-serif italic">
                    Appetizers
                  </h1>
                  <p
                    className="text-md py-1 tracking-widest text-[#e4c590] hover:font-bold cursor-pointer"
                    onClick={() => {
                      window.location.href = "/fastfood";
                    }}
                    style={{ transition: "1s" }}
                  >
                    VIEW MENU
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-white text-center my-2">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/offer-image-3.2220579532c7ff25ef9c.jpg" />
                  </div>
                  <h1 className="py-2 text-3xl font-serif italic">Drinks</h1>
                  <p
                    className="text-md py-1 tracking-widest text-[#e4c590] hover:font-bold cursor-pointer"
                    onClick={() => {
                      window.location.href = "/fastfood";
                    }}
                    style={{ transition: "1s" }}
                  >
                    VIEW MENU
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <Slider /> */}
          <MySlider />
        </div>

        {/* Top Notch Start */}
        <About />
      </div>
    </>
  );
}

export default Home;
