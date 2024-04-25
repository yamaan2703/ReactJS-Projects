import React from "react";
import AppBtn from "./AppBtn";
import { useNavigate } from "react-router-dom";

function AppCard({ name, title, address, experience, imageUrl }) {
  const navigate = useNavigate();
  return (
    <div className="border p-2 rounded-xl">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="rounded-lg h-auto w-full" />
      )}
      <h2 className="text-md bg-blue-200 w-[150px] text-center rounded-2xl mt-2 p-1 text-blue-700 font-semibold">
        {title}
      </h2>
      <h2 className="font-semibold text-xl px-1">{name}</h2>
      <h2 className="text-blue-700 font-semibold text-lg px-1">{experience}</h2>
      <p className="text-sm text-gray-500 italic">{address}</p>
      <div className="mt-2">
        <AppBtn label="Book Now" onClick={() => navigate("/details")} />
      </div>
    </div>
  );
}

export default AppCard;
