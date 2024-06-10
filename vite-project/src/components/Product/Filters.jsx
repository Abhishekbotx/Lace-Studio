import React from 'react';

const Filters = () => {
    return (
        <div className="w-1/4 pr-4">
            <h3 className="text-lg font-semibold mb-4 roboto-slab ">Filters</h3>
            <div className="mb-4">
                <h4 className="font-semibold mb-2 roboto-slab">Occasion</h4>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="" />
                    <div className='poppins'>Zara</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Gucci</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>H&M</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" />
                    <div className='poppins'>Reebok</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" />
                    <div className='poppins'>Puma</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Nike</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>New Balance</div>
                </label>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold mb-2 roboto-slab">Occasion</h4>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Casual</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Wedding</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Reception</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Sangeet</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Mehendi</div>
                </label>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold mb-2 roboto-slab">Size</h4>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Small</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Medium</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Large</div>
                </label>
                <label className="flex items-center mb-2 gap-x-2">
                    <input type="checkbox" className="mr-2" /> 
                    <div className='poppins'>Plus Size</div>
                </label>
            </div>
        </div>
    );
};

export default Filters;
