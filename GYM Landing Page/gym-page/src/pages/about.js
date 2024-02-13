import { useEffect } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import about from "../images/about.png";
import about2 from "../images/about2.png";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      <div className="about_section">
        <div className=" bg-black h-[400px]">
          {/* <Navbar /> */}
          <div className=" flex justify-center items-center h-[400px]">
            <h1 className="text-white text-5xl font-extrabold font-sans">
              About Us
            </h1>
          </div>
        </div>

        <div className="container_1">
          <div className="row m-0 p-0">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="about_img flex justify-center py-5">
                  <img src={about} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="about_text w-[600px] flex flex-column h-[680px] justify-center py-5">
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
                          <i className="fa-brands fa-square-instagram px-2"></i>
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

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
