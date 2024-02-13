import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import the Typed library
import Navbar from "../components/navbar";
import Button from "../components/button";
import about from "../images/about.png";
import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";
import gallery4 from "../images/gallery4.png";
import gallery5 from "../images/gallery5.png";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import Card from "../components/card";
import ContactImg from "../images/contact.png";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const textRef = useRef(null);
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Refresh AOS on component updates
  }, []);

  useEffect(() => {
    const options = {
      strings: ["BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const services = [
    {
      icon: "fa-solid fa-dumbbell",
      title: "QUALITY EQUIPMENT",
      description:
        "The sea freight service has grown considerably in recent years. We spend time getting to know your needs and then.",
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "HEALTH CARING",
      description:
        "The sea freight service has grown considerably in recent years. We spend time getting to know your needs and then.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "GYM STRATEGIES",
      description:
        "The sea freight service has grown considerably in recent years. We spend time getting to know your needs and then.",
    },
  ];

  const teamMembers = [
    {
      imageUrl: team1,
      content: "----- Creative Director -----",
      title: "JAMES PARKER",
    },
    {
      imageUrl: team2,
      content: "----- Creative Director -----",
      title: "WILLIAM MICHEAL",
    },
    {
      imageUrl: team3,
      content: "----- Creative Director -----",
      title: "JOUSHA ADAM",
    },
  ];

  return (
    <>
      <div className="hero_section">
        <div className="hero_shadow text-center"> 
          <div className="container flex justify-center items-center h-[640px]">
            <div className="w-[50%] h-[25%] hero_text">
              <p className="text-red-700 text-xl pt-3">
                ---------- WITH PATRICK POTTER ----------
              </p>
              <h1
                ref={textRef}
                className="text-5xl text-white font-extrabold py-2"
              >
                BUILD PERFECT BODY SHAPE FOR GOD AND HEALTHY LIFE.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section_home">
        <div className="container_1">
          <div className="row m-0 p-0">
            <div className="col-md-6">
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="about_img flex justify-center py-5">
                  <img src={about} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="about_text lg:w-[600px] flex flex-column h-[680px] justify-center">
                  <p className="text-xl text-red-500 py-3">
                    ---------- ABOUT OUR GYM ----------
                  </p>
                  <h3 className="text-blue-950 text-3xl font-extrabold py-2">
                    SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE
                    TIME!
                  </h3>
                  <p className="text-lg font-bold py-3">
                    Brook presents your services with flexible, convenient and
                    cdpose layouts. You can select your favorite layouts &
                    elements for cular ts with unlimited ustomization
                    possibilities. Pixel-perfect replication of the designers is
                    intended.
                  </p>
                  <p className="text-gray-500 text-lg py-3">
                    Brook presents your services with flexible, convefnient and
                    chient anipurpose layouts. You can select your favorite
                    layouts.
                  </p>
                  <div className="about_btn my-3">
                    <Button label="BECAME A MEMBER" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_section_home my-5">
        <div className="container_1 p-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="text-center">
                  <p className="text-red-500 text-xl py-2">
                    --------- OUR SERVICES FOR YOU --------
                  </p>
                  <h1 className="text-white font-extrabold text-5xl">
                    PUSH YOUR LIMITS FORWARD WE OFFER TO YOU.
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="py-5 text-center">
                  <Button label="MORE SERVICES" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_2 p-5">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <div className="service_card text-center p-5 w-[90%] bg-red-50 rounded-2xl">
                    <p className="text-5xl p-2">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </p>
                    <h6 className="text-xl font-bold p-1">{service.title}</h6>
                    <p className="text-lg ">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className="about_section2_home">
        <div className="container_2 p-5 bg-red-50">
          <div className="row m-0 p-0">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="text-center">
                  <p className="text-red-500 text-xl py-2">
                    --------- OUR TEAM MAMBERS --------
                  </p>
                  <h1 className="text-blue-950 font-extrabold text-5xl">
                    OUR MOST EXPRIENCED TRAINERS.
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="py-5 text-center">
                  <Button label="MORE SERVICES" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container_3 p-5">
          <div className="row m-0 p-0">
            {teamMembers.map((member, index) => (
              <div className="col-md-4" key={index}>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <div className="p-5">
                    <Card
                      imageUrl={member.imageUrl}
                      content={member.content}
                      title={member.title}
                      icons={
                        <>
                          <i className="fa-brands fa-facebook px-2"></i>
                          <i className="fa-brands fa-instagram px-2"></i>
                          <i className="fa-brands fa-twitter px-2"></i>
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container_4 p-5 bg-blue-950">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="text-center">
                  <p className="text-red-500 text-xl py-2">
                    --------- PROMOTION OFFER --------
                  </p>
                  <h1 className="text-white font-extrabold text-5xl">
                    April membership offer available Now
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="text-center py-5">
                  <Button label="MORE SERVICES" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery_section_home">
        <div className="container my-5">
          <div className="row p-0 m-0">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div class="gallery_box">
                  <div class="gallery_service mb-2">
                    <img src={gallery1} class="single_img" />
                    <div class="overlay"></div>
                    <div class="gallery_desc">
                      <div className="flex justify-center">
                        <p className="text-3xl font-bold bg-red-700 p-2 w-[50px] h-[50px] rounded-full">
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                      <h1 className="text-white font-bold text-xl">
                        Best Fitness Gallery
                      </h1>
                      <p className="text-white text-lg">Fitness, Body</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <div class="gallery_service mb-2">
                      <img src={gallery2} class="single_img" />
                      <div class="overlay"></div>
                      <div class="gallery_desc">
                        <div className="flex justify-center">
                          <p className="text-3xl font-bold bg-red-700 p-2 w-[50px] h-[50px] rounded-full">
                            <i class="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                        <h1 className="text-white font-bold text-xl">
                          Best Fitness Gallery
                        </h1>
                        <p className="text-white text-lg">Fitness, Body</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <div class="gallery_service mb-2">
                      <img src={gallery3} class="single_img" />
                      <div class="overlay"></div>
                      <div class="gallery_desc">
                        <div className="flex justify-center">
                          <p className="text-3xl font-bold bg-red-700 p-2 w-[50px] h-[50px] rounded-full">
                            <i class="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                        <h1 className="text-white font-bold text-xl">
                          Best Fitness Gallery
                        </h1>
                        <p className="text-white text-lg">Fitness, Body</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <div class="gallery_service mt-3">
                      <img src={gallery4} class="single_img" />
                      <div class="overlay"></div>
                      <div class="gallery_desc">
                        <div className="flex justify-center">
                          <p className="text-3xl font-bold bg-red-700 p-2 w-[50px] h-[50px] rounded-full">
                            <i class="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                        <h1 className="text-white font-bold text-xl">
                          Best Fitness Gallery
                        </h1>
                        <p className="text-white text-lg">Fitness, Body</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <div class="gallery_service mt-3">
                      <img src={gallery5} class="single_img" />
                      <div class="overlay"></div>
                      <div class="gallery_desc">
                        <div className="flex justify-center">
                          <p className="text-3xl font-bold bg-red-700 p-2 w-[50px] h-[50px] rounded-full">
                            <i class="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                        <h1 className="text-white font-bold text-xl">
                          Best Fitness Gallery
                        </h1>
                        <p className="text-white text-lg">Fitness, Body</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_section_home">
        <div className="container p-5">
          <div className="row m-0 p-0">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="contact_img">
                  <img src={ContactImg} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up" data-aos-duration="3000">
                      
                  <p className="text-xl text-red-500 py-3">
                    ---------- CONTACT FORM --------
                  </p>
                  <h1 className="text-blue-950 text-3xl font-extrabold py-2">
                    FEEL FREE TO CONTACT WITH US!
                  </h1>

                  <div className="form p-3">
                    <input
                      placeholder="Name"
                      className="border-b-2 border-red-500 py-2 text-center outline-none m-1 text-xl"
                    />
                    <input
                      placeholder="Phone"
                      className="border-b-2 border-red-500 py-2 text-center outline-none m-1 text-xl"
                    />
                    <input
                      placeholder="Email"
                      className="border-b-2 border-red-500 py-2 text-center outline-none m-1 text-xl"
                    />
                    <input
                      placeholder="Address"
                      className="border-b-2 border-red-500 py-2 text-center outline-none m-1 text-xl"
                    />
                    <textarea
                      placeholder="Message"
                      className="border-b-2 border-red-500 text-center outline-none m-1 text-xl"
                    />
                  </div>
                  <div className="">
                    <Button label="SEND MESSAGE" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
