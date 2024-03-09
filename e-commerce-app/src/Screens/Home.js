import { Link } from "react-router-dom";
import WebBtn from "../Components/WebBtn";
import ImageSlider from "../Components/imageSlide";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="bg-[#0d1819]">
        <ImageSlider />
        <About />

        <div className="home_menu mt-20">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="p-1 text-white text-center">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg" />
                  </div>
                  <h3 className="text-xl py-2 font-serif hover:text-[#e4c590]">
                    Greek Salad
                  </h3>
                  <p className="text-gray-400 py-2">
                    Avocados with crab meat, red onion, crab, saladred bell
                    pepper..
                  </p>
                  <p className="text-[#e4c590] py-2 text-xl">$39.00</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-1 text-white text-center">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg" />
                  </div>
                  <h3 className="text-xl py-2 font-serif hover:text-[#e4c590]">
                    Tokusen
                  </h3>
                  <p className="text-gray-400 py-2">
                    Avocados with crab meat, red onion, crab, saladred bell
                    pepper..
                  </p>
                  <p className="text-[#e4c590] py-2 text-xl">$39.00</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-1 text-white text-center">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg" />
                  </div>
                  <h3 className="text-xl py-2 font-serif hover:text-[#e4c590]">
                    Butternut Pumpkin
                  </h3>
                  <p className="text-gray-400 py-2">
                    Avocados with crab meat, red onion, crab, saladred bell
                    pepper..
                  </p>
                  <p className="text-[#e4c590] py-2 text-xl">$39.00</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-1 text-white text-center">
                  <div className="flex justify-center">
                    <img src="https://mediacity.co.in/delici/static/media/menu-image-14.cc993aeb8cae1e7c3ae7.jpg" />
                  </div>
                  <h3 className="text-xl py-2 font-serif hover:text-[#e4c590]">
                    Opu Fish
                  </h3>
                  <p className="text-gray-400 py-2">
                    Avocados with crab meat, red onion, crab, saladred bell
                    pepper..
                  </p>
                  <p className="text-[#e4c590] py-2 text-xl">$39.00</p>
                </div>
              </div>
            </div>

            <div className="text-center py-5">
              <Link to="/menu">
                <WebBtn label="VIEW ALL MENU"/>
              </Link>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
