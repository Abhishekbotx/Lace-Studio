import React, { useRef } from 'react';

const SearchComponent = () => {
    const fileInputRef = useRef(null);

    const handleImageSearchClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file);
        }
    };

    return (
        <div className="justify-between items-center my-4">
            <div className="flex justify-center space-x-8 my-6">
                <button className="border-2 border-gray-800 rounded px-4 py-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Search with text
                </button>
                <div
                    className="border-2 border-gray-800 rounded px-4 py-2 flex items-center cursor-pointer"
                    onClick={handleImageSearchClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 mr-4' viewBox="0 0 32 32" id="camera"><path d="M27,8H22.78l-.4341-1.7295A2.9957,2.9957,0,0,0,19.4365,4h-6.873a2.9957,2.9957,0,0,0-2.91,2.2705L9.22,8H5a3.0033,3.0033,0,0,0-3,3V25a3.0033,3.0033,0,0,0,3,3H27a3.0033,3.0033,0,0,0,3-3V11A3.0033,3.0033,0,0,0,27,8Zm1,17a1.0013,1.0013,0,0,1-1,1H5a1.0013,1.0013,0,0,1-1-1V11a1.0013,1.0013,0,0,1,1-1h5a1,1,0,0,0,.97-.7568l.6236-2.4864A.9987.9987,0,0,1,12.5635,6h6.873a.9987.9987,0,0,1,.97.7568L21.03,9.2432A1,1,0,0,0,22,10h5a1.0013,1.0013,0,0,1,1,1Z"></path><path d="M14 10h4a1 1 0 0 0 0-2H14a1 1 0 0 0 0 2zM16 12a6 6 0 1 0 6 6A6.0066 6.0066 0 0 0 16 12zm0 10a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 16 22zM26 12H24a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path></svg>
                    Search with image
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <div className="flex space-x-4 justify-between items-center">
                <p className="text-gray-700">Showing 1-20 out of 50 Products</p>
                <div className="relative">
                    <select className="border-2 border-gray-400 rounded px-4 py-2">
                        <option>New Arrivals</option>
                        <option>Best Sellers</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    {/* <select name="" id=""></select> */}
                    {/* <svg className="absolute right-2 top-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg> */}
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
