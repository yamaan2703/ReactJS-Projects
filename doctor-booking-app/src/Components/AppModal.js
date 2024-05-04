import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import AppBtn from "./AppBtn";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { Calendar } from "primereact/calendar";

const YourComponent = ({ onClose }) => {
  const [date, setDate] = useState(new Date()); // Set initial date to current date
  const [time, setTime] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm pt-32 flex justify-center ">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button
          onClick={onClose}
          className="place-self-end text-3xl text-red-500"
        >
          <IoCloseCircle />
        </button>
        <div className="bg-blue-500 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold shadow-lg p-2 shadow-white">
            Book a Time & Date with your Doctor
          </h1>

          <div className="flex justify-center items-center space-x-4">
            <div className="card">
              <h1 className="font-bold py-2 text-lg">Set Appointment Date</h1>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                touchUI
                placeholder="Set Date"
                inputClassName="custom-calendar-input"
                inputStyle={{
                  backgroundColor: "#your-input-bg-color",
                  color: "black",
                  border: "1px solid #your-input-border-color",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              />
            </div>

            <div>
              <h1 className="font-bold py-2 text-lg">Set Appointment Time</h1>
              <Calendar
                id="calendar-timeonly"
                value={time}
                onChange={(e) => setTime(e.value)}
                timeOnly
                hourFormat="12" // Set hour format to 12-hour clock
                placeholder="Set Time"
                inputClassName="custom-timer-input"
                inputStyle={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              />
            </div>
          </div>

          <AppBtn label="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
