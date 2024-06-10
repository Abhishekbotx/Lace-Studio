import React from 'react';
import Image from './../Img/WhoImage.png'
const WhoWeAre = () => {
    return (
        <div className="px-4 pt-8 bg-white w-full min-h-screen flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl great-vibes-regular custom-color1 text-center mb-6">
                Who We Are ?
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl">
                <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0 font-serif">
                    <p className="text-lg poppins text-slate-800 mb-4 px-4">
                        At My Lace Studio, our collection is a true celebration of intricate beauty and exquisite craftsmanship. Our shelves are adorned with a variety of laces, each telling a unique story of elegance and charm.
                    </p>
                    <p className="text-lg poppins text-slate-800 mb-4 px-4">
                        But we don't stop there - we believe in the magic of combining these laces with a diverse range of fabrics to create stunning masterpieces.
                    </p>
                    <p className="text-lg poppins text-slate-800 mb-4 px-4">
                        From delicate sarees that exude grace to enchanting table runners that elevate any dining experience, our studio is a treasure trove of all things lace.
                    </p>
                </div>
                <div className="lg:w-1/3 flex justify-center h-[60vh]">
                    <img
                        src={Image}
                        alt="Smiling woman in traditional dress"
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                    />
                </div>
            </div>
            <h2 className="text-2xl md:text-5xl great-vibes-regular custom-color1 text-center mt-8">
                Say Goodbye To Endless Hunting
            </h2>
            <button className='px-4 py-2 text-white bg-slate-700 rounded-md mt-4'>Get Started</button>
        </div>
    );
};

export default WhoWeAre;
