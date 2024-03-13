import React from 'react';
import { useSelector } from 'react-redux';

function CartPage() {
  const { cart } = useSelector((state) => state.allcarts);

  return (
    <div className='bg-[#0f1d22]'>
      <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-40'>
        {cart.map((data) => (
          <div className='text-center m-4 shadow-md shadow-[#e4c590]' key={data.id}>
              <img src={data.img} alt={data.name} className='h-[300px]' />
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
            </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CartPage;
