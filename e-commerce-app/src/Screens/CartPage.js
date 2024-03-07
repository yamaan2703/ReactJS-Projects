import React, { useState } from "react";
import bg1 from "../images/bg2.jpg";
import WebBtn from "../Components/WebBtn";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../Features/cartSlice";

export default function CartPage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allcarts
  );
  const dispatch = useDispatch();

  // Function to update quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    // Assuming you have an action to update the quantity in your Redux store
    // Dispatch an action here to update the quantity of the product in the cart
  };

  // Function to handle incrementing quantity
  const increment = (productId) => {
    updateQuantity(productId + 1);
  };

  // Function to handle decrementing quantity
  const decrement = (productId) => {
    updateQuantity(productId - 1);
    // if ("" > 0) {
    // }
  };

  return (
    <div className="cart_page  bg-[#0d1819] h-screen relative">
      <div className="container bg-[#0d1819] pt-20 ">
        {cart.map((data) => (
          <div className="row" key={data.id}>
            <div className="col-md-8">
              <div className="product_cart flex p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl">
                <div className="">
                  <img
                    src={data.img}
                    className="w-[600px] h-[300px] bg-cover bg-center rounded-xl"
                    alt="Product"
                  />
                </div>
                <div className="text-white px-2">
                  <h1 className="text-4xl text-[#e4c590] font-serif py-1">
                    {data.name}
                  </h1>
                  <p className="py-1 text-2xl text-yellow-600 flex">
                    ${data.price}
                  </p>
                  <p className="py-1 text-2xl text-yellow-600 flex">
                    Rating: <span className="mx-1">{data.rating}</span>
                  </p>
                  <p className="py-1 text-gray-400">{data.desc}</p>
                  <p className="text-gray-400">{data.description}</p>
                  <p className="py-1 text-3xl text-red-500">
                    <MdDelete onClick={() => dispatch(removeItem(data.id))} />
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="my-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => decrement(data.id)}
                          className="px-3 py-2 rounded-xl font-bold text-2xl bg-[#e4c590] text-white"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={data.quantity}
                          readOnly
                          className="text-center w-[50px] py-2 mx-2 bg-transparent border-2 border-[#e4c590]"
                        />
                        <button
                          onClick={() => increment(data.id)}
                          className="px-3 py-2 rounded-xl font-bold text-xl bg-[#e4c590] text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-xl">${data.price * data.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cash_cart p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl text-white">
                <div className="flex justify-between py-1">
                  <p className="text-white text-lg">Total Quantity:</p>
                  <p className="text-white text-lg">{totalQuantity}</p>
                </div>
                <div className="flex justify-between py-1">
                  <p className="text-white text-lg">Total Price:</p>
                  <p className="text-white text-lg">$ {totalPrice}</p>
                </div>
                <hr className="text-[#e4c590]" />
                <div className="text-center pt-3">
                  <WebBtn label="PAY NOW" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
