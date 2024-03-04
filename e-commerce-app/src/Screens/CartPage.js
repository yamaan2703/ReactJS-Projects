import React from 'react';
import bg1 from '../images/bg2.jpg';

export default function CartPage() {
  return (
    <div className="bg-[#0d1819] relative">
      <div className="container mx-auto pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="cart bg-sky-500 p-5 rounded-lg flex items-center">
            <img src={bg1} alt="Product" className="w-48 h-auto rounded-lg mr-4" />
            <div>
              <h1 className="text-white text-xl font-bold">Zinger Burger</h1>
              <p className="text-white">$ 199</p>
              <p className="text-white">*5.7</p>
              <p className="text-white">Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor.</p>
            </div>
          </div>
          <div className="bill bg-yellow-500 p-5 rounded-lg">
            <p className="text-white">Total Quantity</p>
            <p className="text-white">Total Price</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
