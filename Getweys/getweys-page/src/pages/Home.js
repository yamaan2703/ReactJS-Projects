import React from "react";
import AppBtn from "../components/AppBtn";
import banner1 from "../images/banner 1.svg";
import banner2 from "../images/banner 2.png";
import AppCard from "../components/AppCard";
import { TbGridDots } from "react-icons/tb";
import { GiVendingMachine } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { MdMobileScreenShare } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { SiAltiumdesigner } from "react-icons/si";
import { BiSolidNotepad } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { BsHash } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { IoVolumeHighOutline } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="home_page relative top-28">
        <div className="section_1">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="py-4 px-4 md:px-4 lg:px-12">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                  Software Development Company in Pakistan.
                </h1>
                <p className="text-gray-700 py-4 ">
                  We provide quality-driven, innovative, and cutting-edge
                  solutions to help you flourish in today's ever-changing
                  business. We provide services like website development,
                  graphic designing, digital marketing, and Mobile App
                  development as we are one of the best software development
                  companies in Pakistan that provide these services at an
                  affordable price. Our other services include website designs,
                  API development, SEO, IOS App development, social media
                  marketing, content writing, WordPress error solving, and
                  database designing.
                </p>
                <div className="w-[150px]">
                  <AppBtn label="Let's Discuss" />
                </div>
              </div>
              <div className="p-7">
                <img src={banner1} />
              </div>
            </div>
          </div>
        </div>

        <div className="section_2 mt-12">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#ec193f] font-bold py-5">
                FREQUENT BUYING SERVICES
              </p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Top Selling Services
              </h1>
              <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
                We offer you the best range of mobile application and digital
                marketing services in Pakistan for small and enterprise
                businesses that help in growing your business online.
              </p>
            </div>

            <div className="mt-5 p-7">
              <AppCard />
            </div>
          </div>
        </div>

        <div className="section_3">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="px-7 py-12">
                <img src={banner2} />
              </div>
              <div className="py-4 px-4 md:px-4 lg:px-12">
                <p className="py-4 text-[#ec193f] font-semibold">ABOUT US</p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                  Full Software Development & Marketing Service in Pakistan.
                </h1>
                <p className="text-gray-700 py-4 ">
                  As you know, technology is entering a period of maximum
                  growth. We strive to provide the 'results' and 'returns' of
                  online solutions specifically website design services for your
                  business to the sustainable development of digital marketing
                  services (SEO & SMO). As a result, the Internet and related
                  technologies have flourished dramatically. Therefore, Getweys
                  offers the best solution for your business website needs. We
                  will always help you to reach your goals. Getweys will always
                  keep in mind that customer satisfaction is our first and last
                  mission.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                  <div className="p-2">
                    <div className="flex items-center">
                      <TbGridDots className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        1000+
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Completed projects
                      </p>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center">
                      <GiVendingMachine className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        126720
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Working hours
                      </p>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center">
                      <TbUsersGroup className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        7th
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Top Committers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[150px]">
                  <AppBtn label="Let's Discuss" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_4 bg-gray-200">
            <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <p className="text-[#ec193f] font-bold py-5">
              SERVICES
              </p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
              Let’s Check Our Services
              </h1>
              <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
              At Getweys, we offer you a wide variety of services that can solve your problems. We provide you with the services required to boost your startup business online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <MdMobileScreenShare className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full"/>
                   <p className="text-md py-2 ">Mobile Development</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <FaCreditCard className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-md py-2 ">Web Development</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <SiAltiumdesigner className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Graphics Designing</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <BiSolidNotepad className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Content Writing</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <MdShoppingCart className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Social Media Management</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <BsHash className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Digitial Marketing</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <IoVideocamOutline className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Mobile Development</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <PiTelevisionSimpleLight className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full"/>
                   <p className="text-lg py-2">2D/3D Modeling</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <RiSeoLine className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-lg py-2">SEO Service</p>
               </div>

               <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                   <IoVolumeHighOutline className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full"/>
                   <p className="text-lg py-2">Advertisment</p>
               </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
