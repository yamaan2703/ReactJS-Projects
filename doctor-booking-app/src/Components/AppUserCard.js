import React from "react";
import AppBtn from "./AppBtn";

function AppUserCard() {
  return (
    <div className="user_Card">
      <div className="rounded-3xl shadow-2xl flex items-center p-5 w-[40%] space-x-4">
        <div class="">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-[100px] h-[100px] object-cover rounded-full"
          />
        </div>
        <div className="details my-3 p-5 ">
           <h1 className="text-blue-500 font-bold text-xl">William Micheal</h1>
           <p className="text-gray-500">william@gmail.com</p>

           <div className="flex space-x-4">
            <div className="my-2"><AppBtn label="Your Appointment"/></div>
            <div className="my-2"><AppBtn label="Logout"/></div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default AppUserCard;
