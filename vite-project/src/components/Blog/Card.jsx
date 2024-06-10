import React from 'react';

const Card = ({ image, category, title, author, date }) => {
  return (
    <div className="card hover:scale-95 transition-transform ease-in duration-100 bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72">
      <div className=' p-4  overflow-hidden'>
      <img src={image} alt={title} className="w-full rounded-md h-40 object-cover" />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-gray-600 bg-yellow-200 px-2 py-1 rounded-sm">{category}</span>
        <h3 className="font-semibold text-lg mt-2">{title}</h3>
        <div className="text-gray-500 text-sm mt-2">
          <span>{author}</span> | <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
