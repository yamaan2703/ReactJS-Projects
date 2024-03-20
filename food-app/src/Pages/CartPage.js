import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoStarSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Features/CartSlice';
import Button from "../Components/Button"
// Import actions if needed

function CartPage() {
  const { cart } = useSelector((state) => state.allcarts);
  const dispatch = useDispatch()

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className='bg-[#0f1d22] h-screen'>
      <div className='container bg-[#0f1d22] p-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-20'>
          {cart.map((data) => (
            <div className='text-center m-4 shadow-md shadow-[#e4c590]' key={data.id}>
              <img src={data.img} alt={data.name} className='h-[300px] w-full' />
              <div className='p-2 text-center'>
                <h1 className="text-2xl text-[#e4c590] font-serif py-1">
                  {data.name}
                </h1>
                <p className="text-gray-400 italic">{data.desc}</p>
                <div className='flex justify-between pt-2'>
                  <p className="text-2xl text-yellow-600 flex">
                    <IoStarSharp className='text-yellow-500 pt-2'/> {data.rating}
                  </p>
                  <p className="text-xl text-yellow-600 flex">
                    ${data.price}
                  </p>
                 
                </div>
                {/* Quantity modification */}
                <div className="flex items-center justify-between">
                <div className="text-red-500 text-2xl">
                    {/* Button for deleting item */}
                    <MdDelete 
                      onClick={() => dispatch(removeItem(data.id))}
                    />
                  </div>
                  <div className="my-2">
                    <div className="flex items-center">
                      <button
                       onClick={() => dispatch(decreaseItemQuantity(data.id))}
                        className="px-4 py-1 rounded-xl font-bold text-2xl bg-[#e4c590] text-white"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={data.quantity}
                        readOnly
                        className="text-center text-white w-20 py-2 mx-2 bg-transparent border-2 border-[#e4c590]"
                      />
                      <button
                        onClick={() => dispatch(increaseItemQuantity(data.id))}
                        className="px-4 py-1 rounded-xl font-bold text-xl bg-[#e4c590] text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
         
          <div className="">
            <div className="">
              <div className="cash_cart bg-gray-700 text-white mt-4 p-2 rounded-xl shadow-md shadow-[#e4c590]">
                <div className="flex justify-between py-1">
                  <p className="text-lg">Total Quantity:</p>
                  <p className="text-lg">{totalQuantity}</p>
                </div>
                <div className="flex justify-between py-1">
                  <p className="text-lg">Total Price:</p>
                  <p className="text-lg">$ {totalPrice}</p>
                </div>
                <hr className="text-[#e4c590]" />
                <div className="flex justify-center py-2">
                 <Button label="Pay Now"/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

