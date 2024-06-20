import React, { useState } from 'react';

const ProductCard = ({ image, title, price, brand }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="bg-white hover:scale-105 relative transition-transform duration-100 ease-in h-96 shadow-md border rounded-lg p-4">
            <img src={image} alt={title} className="mb-4 h-[60%] w-full object-cover rounded-sm" />
            <h5 className="font-semibold">{title}</h5>
            <p className="mb-2">Rs {price}</p>
            <p className="poppins text-sm">SALE PRODUCT</p>
            <p className="poppins text-sm uppercase bg-yellow-200 text-center rounded-sm inline-block px-2 py-1 mt-2">
                <span>{brand}</span>
            </p>
            <span
                className={`favorite-button h-6 text-2xl absolute top-6 right-6 cursor-pointer ${isFavorite===true ? 'text-red-500' : ' text-white'}`}
                onClick={toggleFavorite}
            >
               <i class="ri-heart-3-fill"></i>
            </span>
        </div>
    );
};

export default ProductCard;
