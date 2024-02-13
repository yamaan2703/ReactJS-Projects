import Button from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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

  return (
    <>
      <div className="service_section">
        <div className=" bg-black h-[400px]">
          {/* <Navbar /> */}
          <div className=" flex justify-center items-center h-[400px]">
            <h1 className="text-white text-5xl font-extrabold font-sans">
              Our Services
            </h1>
          </div>
        </div>

        <div className="container_1 p-5 bg-red-50 my-5">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="text-center">
                  <p className="text-red-500 text-xl py-2">
                    --------- OUR SERVICES FOR YOU --------
                  </p>
                  <h1 className="text-blue-950 font-extrabold text-5xl">
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
          <div className="row m-0 p-0">
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

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
