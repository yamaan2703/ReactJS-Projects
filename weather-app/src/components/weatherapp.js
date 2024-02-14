import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function WeatherApp() {
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [visibility, setVisibility] = useState("")
  const api_key = "431895222b45b2a934e812bb96e69268";

  const getCurrentDateTime = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      // timeZone: 'UTC',
    };
    const formattedDate = now.toLocaleDateString("en-US", options);
    setDate(formattedDate);
    setDay(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now));
  };

  useEffect(() => {
    getCurrentDateTime();
    const intervalId = setInterval(getCurrentDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const SearchWeather = async () => {
    const inputElement = document.getElementsByClassName("input_city");
    if (!inputElement[0].value) {
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement[0].value}&units=metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      setTemperature(data.main.temp);
      setLocation(data.name);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setVisibility(data.visibility)
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="background flex justify-center items-center">
      <div className="w-[95%] h-[95%] bg-[rgba(0,0,0,0.2)] p-10">
        <h1 className="text-6xl font-bold shadow-xl p-3 my-2 shadow-gray-900 text-center">Weather App</h1>
        <div className="search_div p-3 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="input_city bg-transparent p-3 border-b-2 border-gray-900 outline-none w-[400px] text-gray-900 font-bold text-xl"
            style={{ placeholderColor: "black" }}
          />
          <span className="bg-transparent text-gray-900 text-2xl rounded-r-lg h-10 w-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faSearch} onClick={SearchWeather} />
          </span>
        </div>
        <div className="data_container text-center p-5 m-5">
          {temperature && location ? (
            <>
              <div className="weather_temp text-9xl py-2 text-gray-950">
                {temperature ? `${Math.round(temperature)}°C` : ""}
              </div>
              <div className="weather_location text-7xl font-bold py-2 text-gray-950">
                {location}
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="humidity text-3xl font-serif font-bold shadow-xl shadow-gray-900 p-2 text-gray-950">{humidity}% Humidity</div>
                <div className="windSpeed text-3xl font-serif font-bold shadow-xl shadow-gray-900 p-2 text-gray-950">{windSpeed} km/h Wind Speed</div>
                <div className="visibility text-3xl font-serif font-bold shadow-xl shadow-gray-900 p-2 text-gray-950">{visibility} mi</div>
              </div>
            </>
          ) : (
            <div className="date_time p-5">
              <div className="text-5xl font-bold text-gray-900 shadow-xl shadow-gray-900 p-3">{date}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
