import React from "react";
import menu from "../images/menu.jpg";
import Button from "../Components/Button";
import { IoStarSharp } from "react-icons/io5";
import { CakeData } from "../Config/AppData";
import { CupCakeData } from "../Config/AppData";
import { CoffeeData } from "../Config/AppData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/CartSlice";

function Dessert() {
  const items = useSelector((state) => state.allcarts.items)
  const dispatch = useDispatch()
  return (
    <div className="bg-[#0f1d22]">
      <div className="relative">
        <img src="https://plus.unsplash.com/premium_photo-1663133869198-0c3bb20d11ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-black opacity-10 w-full h-screen" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1
            style={{
              fontFamily: "Protest Riot, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
            className="text-4xl md:text-4xl lg:text-6xl text-[#e4c590]"
          >
            Dessert Section...
          </h1>
          <p className="text-white text-lg md:text-lg lg:text-2xl py-2 font-serif">
            We offer the best prices along with the best taste and quality.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-7">
        <h1
          style={{
            fontFamily: "Protest Riot, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
          className="text-5xl text-[#e4c590] py-5"
        >
          Cake...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CakeData.map((item, index) => (
            <div key={index} className="relative bg-gray-700 rounded-xl">
              <div className="">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-t-xl w-full h-[200px]"
                />
              </div>
              <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-80 rounded-tr-xl rounded-bl-xl">
                <p className="text-white flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  {item.rating}
                </p>
              </div>
              <div className="m-2 text-center">
                <h3 className="text-[#e4c590] font-serif text-2xl py-1">
                  {item.name}
                </h3>
                <p className="text-xl text-yellow-500 py-1">$ {item.price}</p>
                <div className="my-3">
                  <Button 
                  label="Order Now" 
                  onClick={() => dispatch(addToCart(item))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-7">
        <h1
          style={{
            fontFamily: "Protest Riot, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
          className="text-5xl text-[#e4c590] py-5"
        >
          Cup Cake...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CupCakeData.map((item, index) => (
            <div key={index} className="relative bg-gray-700 rounded-xl">
              <div className="">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-t-xl w-full"
                />
              </div>
              <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-80 rounded-tr-xl rounded-bl-xl">
                <p className="text-white flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  {item.rating}
                </p>
              </div>
              <div className="m-2 text-center">
                <h3 className="text-[#e4c590] font-serif text-2xl py-1">
                  {item.name}
                </h3>
                <p className="text-xl text-yellow-500 py-1">$ {item.price}</p>
                <div className="my-3">
                  <Button 
                  label="Order Now" 
                  onClick={() => dispatch(addToCart(item))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-7">
        <h1
          style={{
            fontFamily: "Protest Riot, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
          className="text-5xl text-[#e4c590] py-5"
        >
          Coffee...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CoffeeData.map((item, index) => (
            <div key={index} className="relative bg-gray-700 rounded-xl">
              <div className="">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-t-xl w-full h-[200px]"
                />
              </div>
              <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-80 rounded-tr-xl rounded-bl-xl">
                <p className="text-white flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  {item.rating}
                </p>
              </div>
              <div className="m-2 text-center">
                <h3 className="text-[#e4c590] font-serif text-2xl py-1">
                  {item.name}
                </h3>
                <p className="text-xl text-yellow-500 py-1">$ {item.price}</p>
                <div className="my-3">
                  <Button 
                  label="Order Now" 
                  onClick={() => dispatch(addToCart(item))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dessert