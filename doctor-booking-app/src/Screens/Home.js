import React from "react";
import AppNavbar from "../Components/AppNavbar";
import AppBtn from "../Components/AppBtn";
import AppInp from "../Components/AppInp";
import { IoSearch } from "react-icons/io5";
import { TbDental } from "react-icons/tb";
function Home() {
  return (
    <>
      <AppNavbar />
      <div className="relative">
        <div className="container absolute top-16 sm:top-16 lg:top-32 px-10">
          <div className="section_1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="m-auto">
                <h1 className="logo text-3xl font-bold mb-4">
                  FIND & BOOK YOUR{" "}
                  <span className="text-blue-700 font-bold">APPOINTMENT</span>{" "}
                  WITH YOUR FAV{" "}
                  <span className="text-blue-700 font-bold">DOCTORS.</span>
                </h1>
                <p className="text-gray-700 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
                <div className="w-[150px]">
                  <AppBtn label="Explore" />
                </div>
              </div>
              <div className="mx-auto">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Healthcare"
                  className="rounded-xl w-[500px]"
                />
              </div>
            </div>
          </div>

          <div className="section_2">
            <div className="text-center my-10">
              <h1 className="text-4xl font-bold">
                Search <span className="text-blue-700 font-bold">Doctors</span>
              </h1>
              <p className="text-lg text-gray-500 py-1">
                Search your Doctor and Book your Appointment in one click.
              </p>
              <div className="flex justify-center items-center">
                <div className="w-[500px]">
                  <AppInp label="Search..." className="" />
                </div>
                <div className="px-1">
                  <AppBtn label="Search" icon={IoSearch} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 px-10 py-5">
              <div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div>
              <div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div><div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div><div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div><div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div><div className="bg-blue-200 text-blue-700 flex flex-col items-center justify-center p-3 rounded-xl">
                <TbDental className="text-5xl "/>
                <p className="font-semibold">Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
