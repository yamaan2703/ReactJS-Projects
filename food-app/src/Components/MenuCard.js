import React from 'react';

function MenuCard(props) {
  const { title, description, category, price, imageUrl } = props;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{category}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
