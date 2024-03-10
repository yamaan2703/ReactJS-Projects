import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from "../Features/cartSlice";
import WebBtn from "../Components/WebBtn";

export default function CartPage() {
  const { cart } = useSelector((state) => state.allcarts);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart_page bg-[#0d1819] h-screen relative">
      <div className="container bg-[#0d1819] pt-20">
        <div className="row">
          {cart.map((data) => (
            <div className="col-md-4" key={data.id}>
              <div className="product_card p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl">
                <img
                  src={data.img}
                  className="w-[400px] h-[200px] rounded-xl"
                  alt="Product"
                />
                <div className="text-white px-2">
                  <h1 className="text-2xl text-[#e4c590] font-serif py-1">
                    {data.name}
                  </h1>
                  <p className="py-1 text-xl text-yellow-600 flex">
                    $ {data.price}
                  </p>
                  <p className="py-1 text-xl text-yellow-600 flex">
                    Rating: <span className="mx-1">{data.rating}</span>
                  </p>
                  <p className="py-1 text-gray-400">{data.desc}</p>
                  <p className="py-1 text-2xl text-red-500">
                    <MdDelete onClick={() => dispatch(removeItem(data.id))} />
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="my-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => dispatch(decreaseItemQuantity(data.id))}
                          className="px-3 py-2 rounded-xl font-bold text-2xl bg-[#e4c590] text-white"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={data.quantity}
                          readOnly
                          className="text-center w-20 py-2 mx-2 bg-transparent border-2 border-[#e4c590]"
                        />
                        <button
                          onClick={() => dispatch(increaseItemQuantity(data.id))}
                          className="px-3 py-2 rounded-xl font-bold text-xl bg-[#e4c590] text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl">${data.price * data.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="cash_cart p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl text-white">
              <div className="flex justify-between py-1">
                <p className="text-lg">Total Quantity:</p>
                <p className="text-lg">{totalQuantity}</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-lg">Total Price:</p>
                <p className="text-lg">$ {totalPrice}</p>
              </div>
              <hr className="text-[#e4c590]" />
              <div className="text-center pt-3">
                <WebBtn label="PAY NOW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




