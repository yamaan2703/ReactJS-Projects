import Carousel from "../components/carousel";
import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";
import gallery4 from "../images/gallery4.png";
import gallery5 from "../images/gallery5.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Refresh AOS on component updates
  }, []);

  return (
    <>
      <div className="gallery_section">
        <div className=" bg-black h-[400px]">
          {/* <Navbar /> */}
          <div className=" flex justify-center items-center h-[400px]">
            <h1 className="text-white text-5xl font-extrabold font-sans">
              Our Gallery
            </h1>
          </div>
        </div>

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

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
