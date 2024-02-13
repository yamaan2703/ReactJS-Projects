import Button from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ContactImg from "../images/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Refresh AOS on component updates
  }, []);
  return (
    <>
      <div className="contact_section">
      <div className=" bg-black h-[400px]">
          {/* <Navbar /> */}
          <div className=" flex justify-center items-center h-[400px]">
          <h1 className="text-white text-5xl font-extrabold font-sans">
            Contact
          </h1>
        </div>
        </div>

        <div className="container p-5">
        <div className="row">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="3000">
                <div className="contact_img">
                  <img src={ContactImg} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="contact_text about_text p-3 my-5 ">
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
                      className="border-b-2 border-red-500 text-center outline-none m-1 text-xl w-[100%]"
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
      </div>
    </>
  );
}
