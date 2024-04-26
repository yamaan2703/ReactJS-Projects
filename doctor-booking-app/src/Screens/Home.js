import React from "react";
import AppNavbar from "../Components/AppNavbar";
import AppBtn from "../Components/AppBtn";
import AppInp from "../Components/AppInp";
import { IoSearch } from "react-icons/io5";
import { TbDental } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { RiLungsFill } from "react-icons/ri";
import { PiBrainFill } from "react-icons/pi";
import { IoEarSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import AppCard from "../Components/AppCard";
import { useNavigate, useNavigation } from "react-router-dom";

function Home() {
   const navigate = useNavigate()

  return (
    <>
      
      <div className="home_pg relative">
        <div className="all_section absolute top-28">
          <div className="section_1 py-5 px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Text Section */}
              <div className="text_section p-9">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Find & Book <span className="text-blue-700">Appointment</span>{" "}
                  with your Fav <span className="text-blue-700">Doctor.</span>
                </h1>
                <p className="italic text-sm md:text-md my-2 text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="w-[200px] mt-4">
                  <AppBtn label="Explore" />
                </div>
              </div>
              {/* Image Section */}
              <div className="p-5">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661699717204-82c08926c77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Some description"
                  className="rounded-xl mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>

          <div className="section_2">
            <div className="flex justify-center items-center my-3">
              <div className="text-center">
                <h1 className="text-4xl font-bold py-1">
                  Serch <span className="text-blue-700">Doctors.</span>
                </h1>
                <p className="text-gray-700 text-lg">
                  Search Your Doctor and Book Appointment in one click.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-[300px]">
                    <AppInp placeholder="Search..." />
                  </div>
                  <div className="px-1 w-[150px]">
                    <AppBtn icon={<IoSearch />} label="Search" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-2">
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out"
                onClick={() => navigate("/bookingdashboard")}
                >
                  <TbDental className="font-extrabold text-4xl" />
                  <p className="text-lg">Dentist</p>
                </div>
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out"
                onClick={() => navigate("/bookingdashboard")}
                >
                  <FaHeartbeat className="font-extrabold text-4xl" />
                  <p className="text-lg">Cardiologist</p>
                </div>
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out"
                onClick={() => navigate("/bookingdashboard")}
                >
                  <RiLungsFill className="font-extrabold text-4xl" />
                  <p className="text-lg">Orthopedic</p>
                </div>
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out" onClick={() => navigate("/bookingdashboard")}>
                  <PiBrainFill className="font-extrabold text-4xl" />
                  <p className="text-lg">Neurologist</p>
                </div>
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out" onClick={() => navigate("/bookingdashboard")}>
                  <IoEarSharp className="font-extrabold text-4xl" />
                  <p className="text-lg">Otology</p>
                </div>
                <div className="rounded-xl flex flex-col justify-center items-center bg-blue-200 text-blue-700 py-9 px-3 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out" onClick={() => navigate("/bookingdashboard")}>
                  <FaUserDoctor className="font-extrabold text-4xl" />
                  <p className="text-lg">General Doctor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section_3">
            <div className="container p-12">
            <h1 className="text-xl font-semibold my-1">Popular Doctors</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <AppCard
                  title="Dentist"
                  name="Dr John Desis"
                  experience="12 Years"
                  address="This is an example card description. You can customize it as needed."
                  imageUrl="https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div>
                <AppCard
                  title="Dentist"
                  name="Dr John Desis"
                  experience="12 Years"
                  address="This is an example card description. You can customize it as needed."
                  imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div>
                <AppCard
                  title="Dentist"
                  name="Dr John Desis"
                  experience="12 Years"
                  address="This is an example card description. You can customize it as needed."
                  imageUrl="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div>
                <AppCard
                  title="Dentist"
                  name="Dr John Desis"
                  experience="12 Years"
                  address="This is an example card description. You can customize it as needed."
                  imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
