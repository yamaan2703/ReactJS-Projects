import React from "react";
import ImageSlider from "../Components/ImageSlider";
import About from "./About";
import iconImage from "../images/iconImage.svg";
import Slider from "../Components/Slider";
import MySlider from "../Components/Slider";
import { IoFastFood } from "react-icons/io5";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { GiPartyPopper } from "react-icons/gi";
import Contact from "./Contact";

function Home() {
  const teamMembers = [
    {
      name: "Willium Joe",
      image:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
      role: "MASTER CHEF",
      description:
        "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
    {
      name: "Steave Den",
      image:
        "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
      role: "MASTER CHEF",
      description:
        "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
    {
      name: "Lily Sopy",
      image:
        "https://mediacity.co.in/delici/static/media/team-3.b9d6f81ac39cd9ccb9de.jpg",
      role: "MASTER CHEF",
      description:
        "Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
  ];

  return (
    <>
      <div className="bg-[#0f1d22]">
        <ImageSlider />

      
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

          
          <div className="bg-[#0f1d22] m-0">
            <MySlider />
          </div>
        </div>
        
        <About />

        <div className="home_section2">
          <div className="container mt-10 p-10">
            <div className="text-center text-white mb-5">
              <p className="text-lg md:text-lg lg:text-xl tracking-widest">
                WHY CHOOSE US
              </p>
              <div className="flex justify-center py-1">
                <img src={iconImage} className="w-[100px]" alt="Icon" />
              </div>
              <h1
                style={{
                  fontFamily: "Protest Riot, sans-serif",
                  fontStyle: "normal",
                }}
                className="text-3xl md:text-3xl lg:text-6xl text-[#e4c590] py-2"
              >
                Our Strength
              </h1>
            </div>

            <div className="row">
              {[
                { Icon: IoFastFood, title: "Hygienic Food" },
                { Icon: GiPartyPopper, title: "Event & Party" },
                {
                  Icon: SiHomeassistantcommunitystore,
                  title: "Fresh Environment",
                },
                { Icon: SiCodechef, title: "Skilled Chefs" },
              ].map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="bg-[#171819] text-white text-center px-4 py-9 m-2 shadow-md hover:shadow-[#e4c590]">
                    <div className="flex justify-center text-6xl mb-3">
                      <item.Icon className="hover:text-[#e4c590]" />
                    </div>
                    <h1 className="text-2xl font-serif text-[#e4c590] py-1">
                      {item.title}
                    </h1>
                    <p className="italic text-gray-400 py-2">
                      Lorem Ipsum is simply dummy printing and typesetting.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home_section3">
          <div className="shadow flex justify-center items-center">
            <div className="text p-2 md:p-2 lg:p-5">
              <h1 className="text-white text-3xl md:text-3xl lg:text-5xl text-center font-serif">I wanted to thank you for inviting me down for that amazing dinner the order night. The food was extraordinary...</h1>
            </div>
          </div>
        </div>

        <div className="home_section4">
          <div className="container mt-10 p-10">
            <div className="text-center text-white mb-5">
              <p className="text-lg md:text-lg lg:text-xl tracking-widest">
                EXPERIENCED TEAM
              </p>
              <div className="flex justify-center py-1">
                <img src={iconImage} className="w-[100px]" alt="Icon" />
              </div>
              <h1
                style={{
                  fontFamily: "Protest Riot, sans-serif",
                  fontStyle: "normal",
                }}
                className="text-3xl md:text-3xl lg:text-6xl text-[#e4c590] py-2"
              >
                Meet Our Chef
              </h1>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div className="col-md-4" key={index}>
                  <div className="text-white">
                    <div className="flex justify-center relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="hover:opacity-80 w-full"
                      />
                      <div className="absolute inset-0 bg-[#e4c590] opacity-5 hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className="px-3 my-2">
                      <h1 className="text-2xl hover:text-[#e4c590] font-bold font-serif py-1">
                        {member.name}
                      </h1>
                      <p className="text-sm text-[#e4c590] py-1">
                        {member.role}
                      </p>
                      <p className="py-1 italic text-gray-400">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}

export default Home;
