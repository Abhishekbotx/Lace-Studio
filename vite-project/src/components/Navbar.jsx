import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import NavLink from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ 
        backgroundSize: 'cover',
        backdropFilter: 'blur(1px)'  
      }} className='absolute z-50   capitalize text-center w-full  bg-slate-400 bg-opacity-10'>
    <div className='text-[4vw] text-white roboto-slab opacity-100'> My Lace Studio</div>
    <nav
    className=" top-0 text-white  opacity-100 left-0 right-0 flex flex-col md:flex-row justify-between items-center w-full px-4 py-3 "
    
  >
     
    <div className="flex justify-between items-center w-full md:w-auto">

       
     
      <button
        className="inline-flex md:hidden  text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } flex-col md:flex md:flex-row   md:items-center w-full mt-4 md:mt-0 text-white space-x-0 md:space-x-14`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:space-x-14 mx-auto  ralway  justify-center">
        <NavLink to="/" className="hover:text-gray-400 py-2 md:py-0">
          HOME
        </NavLink>
        <NavLink to="/lace-matching" className="hover:text-gray-400 py-2 md:py-0">
          LACE MATCHING
        </NavLink>
        <NavLink to="/color-analysis" className="hover:text-gray-400 py-2 md:py-0">
          COLOR ANALYSIS
        </NavLink>
        <NavLink to="/blog" className="hover:text-gray-400 py-2 md:py-0">
          BLOG
        </NavLink>
        
      </div>
      <div className="   mt-4 md:mt-0 lg:pr-8 md:pr-8 flex items-center flex-col md:flex md:flex-row lg:flex lg:flex-row  raleway">
        <NavLink
          to="/login"
          className="text-white hover:cursor px-4 py-2 rounded mb-2 md:mb-0"
        >
          LOG IN
        </NavLink>
        <NavLink
          to="/login"
          className=" hover:cursor text-slate-800    bg-amber-200 px-4 py-2 rounded-sm"
        >
          SIGN UP
        </NavLink>
      </div>
    </div>
  </nav>
  </div>
  );
};

export default Navbar;
