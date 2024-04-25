import React, { useState } from 'react';
import { TbDental } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { RiLungsFill } from "react-icons/ri";
import { PiBrainFill } from "react-icons/pi";
import { IoEarSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6"
import Details from '../Screens/Details';
import Dentist from './Dentist';

function BookingDashboard() {
    const [selectedOption, setSelectedOption] = useState("dentist");

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    const renderPage = () => {
      switch (selectedOption) {
        case "dentist":
          return <Dentist />;
        case "home":
          return <Details />;
        
        default:
          return null;
      }
    };
  
    return (
      <div className="bg-gray-100 h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex flex-grow mt-16 p-5">
          {/* Sidebar */}
          <aside className="bg-gray-200 w-1/5 p-4 rounded-md">
            <h2 className="text-md font-semibold my-1 text-gray-700 px-1">
              Suggestions
            </h2>
            <ul>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 mb-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "dentist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("dentist")}>
                <TbDental className="mr-3" />
                Dentist
              </li>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 my-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "cardiologist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("cardiologist")}>
                <FaHeartbeat className="mr-3" />
                Cardiologist
              </li>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 my-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "cardiologist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("cardiologist")}>
                <RiLungsFill className="mr-3" />
                Orthopedic
              </li>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 my-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "cardiologist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("cardiologist")}>
                <PiBrainFill className="mr-3" />
                Neurologist
              </li>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 my-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "cardiologist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("cardiologist")}>
                <IoEarSharp className="mr-3" />
                Otology
              </li>
              <li className={`flex items-center text-blue-700 bg-blue-200 px-2 py-1 my-4 rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300 ease-in-out hover:text-blue-100 ${selectedOption === "cardiologist" && "bg-blue-500 text-white"}`} onClick={() => handleOptionClick("cardiologist")}>
                <FaUserDoctor className="mr-3" />
                General Doctor
              </li>
            </ul>
          </aside>
  
          {/* Main Content Area */}
          <section className="flex-grow bg-white rounded-md p-8 ml-4">
            {renderPage()}
          </section>
        </main>
      </div>
    );
  }
  
  export default BookingDashboard;
  
