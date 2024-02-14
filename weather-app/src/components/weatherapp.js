import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function WeatherApp() {
  let api_key = '431895222b45b2a934e812bb96e69268'

  const SearchWeather = async () => {
       const element = document.getElementsByClassName("input_city")
       if(element[0].value === ""){
        return 0
       }

       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
       let response = await fetch (url)
       let data = await response.json()

       const temp = document.getElementsByClassName("weather_temp")
       const location = document.getElementsByClassName("weater_location")

       temp[0].innerHTML = data.main.temp
       location[0].innerHTML = data.name

  }

  return (
    <div className='background flex justify-center items-center'>
      <div className='w-[95%] h-[95%] bg-[rgba(0,0,0,0.2)] p-10'>
      <div className='search_div p-3 flex justify-center items-center'>
      <input
      type='text'
      placeholder='Search'
      className='input_city bg-transparent p-3 border-b-2 border-gray-900 outline-none w-[400px] text-gray-900 font-bold'
      style={{ placeholderColor: 'black' }}
    />
      <span className='bg-transparent text-gray-900 text-2xl rounded-r-lg h-10 w-10 flex justify-center items-center'>
        <FontAwesomeIcon icon={faSearch} onClick={() => {SearchWeather()}}/>
      </span>
    </div>


    <div className='data_container text-center border p-5 m-5'>
    <div className='weather_temp text-8xl py-2'>24°C</div>
    <div className='weather_loaction text-7xl font-bold py-2'>Karachi</div>
    <div className='element flex justify-center items-center'>
      <div className='data border p-5'>
        <div className='humidity'>64%</div>
        <div className='text'>humidity</div>
      </div>
      <div className='data border p-5'>
        <div className='windSpeed'>18 km/h</div>
        <div className='text'>Wind Speed</div>
      </div>
    </div>
    </div>
      </div>
    </div>
  );
}
