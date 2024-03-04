import React from "react";
import bg1 from "../images/bg2.jpg";
import WebBtn from "../Components/WebBtn";

export default function CartPage() {
  return (
    <div className="bg-[#0d1819] relative">
      <div className="container pt-40">
        <div className="row">
          <div className="col-md-8">
            <div className="product_cart flex p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl">
              <div className="">
                <img src={bg1} className="w-[600px] h-[300px] bg-cover bg-center rounded-xl"/>
              </div>
              <div className="text-white px-2">
                <h1 className="text-4xl text-[#e4c590] font-serif py-2">Zinger Burger</h1>
                <p className="py-2 text-2xl text-yellow-600 flex">$<span className="mx-1 text-white">199.00</span></p>
                <p className="py-2 text-2xl text-yellow-600 flex">Rating: <span className="mx-1">4.9</span></p>
                <p className="text-gray-400">
                  Coffee's flavor hinges on factors like bean type, origin,
                  roast, grind size, brewing method, water quality, and
                  altitude. Each element adds a distinct note to the brew,
                  creating a rich tapestry of tastes and aromas for aficionados
                  to savor.
                </p>
              </div>
            </div>

            <div className="product_cart flex p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl">
              <div className="">
                <img src={bg1} className="w-[600px] h-[300px] bg-cover bg-center rounded-xl"/>
              </div>
              <div className="text-white px-2">
                <h1 className="text-4xl text-[#e4c590] font-serif py-2">Zinger Burger</h1>
                <p className="py-2 text-2xl text-yellow-600 flex">$<span className="mx-1 text-white">199.00</span></p>
                <p className="py-2 text-2xl text-yellow-600 flex">Rating: <span className="mx-1">4.9</span></p>
                <p className="text-gray-400">
                  Coffee's flavor hinges on factors like bean type, origin,
                  roast, grind size, brewing method, water quality, and
                  altitude. Each element adds a distinct note to the brew,
                  creating a rich tapestry of tastes and aromas for aficionados
                  to savor.
                </p>
              </div>
            </div>

            <div className="product_cart flex p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl">
              <div className="">
                <img src={bg1} className="w-[600px] h-[300px] bg-cover bg-center rounded-xl"/>
              </div>
              <div className="text-white px-2">
                <h1 className="text-4xl text-[#e4c590] font-serif py-2">Zinger Burger</h1>
                <p className="py-2 text-2xl text-yellow-600 flex">$<span className="mx-1 text-white">199.00</span></p>
                <p className="py-2 text-2xl text-yellow-600 flex">Rating: <span className="mx-1">4.9</span></p>
                <p className="text-gray-400">
                  Coffee's flavor hinges on factors like bean type, origin,
                  roast, grind size, brewing method, water quality, and
                  altitude. Each element adds a distinct note to the brew,
                  creating a rich tapestry of tastes and aromas for aficionados
                  to savor.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="cash_cart p-3 bg-gray-700 shadow-md my-4 shadow-[#e4c590] rounded-xl text-white">
              <div className="flex justify-between py-1">
              <p className="text-white text-lg">Total Quantity:</p>
              <p className="text-white text-lg">4</p>
              </div>
              <div className="flex justify-between py-1">
              <p className="text-white text-lg">Total Price:</p>
              <p className="text-white text-lg">5</p>
              </div>
              <hr className="text-[#e4c590]"/>
              <div className="text-center pt-3">
              <WebBtn label="PAY NOW"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
