import React from 'react';
import './../index.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-white bg-black z-[-1]">
      <div className="pt-8">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-col lg:flex-row md:flex-row justify-around w-full px-8 lg:px-0">
            <div className="w-full lg:w-1/5 pl-3 poppins mb-4 lg:mb-0">
              <h3 className="text-xl mb-2">About Us</h3>
              <ul className="text-sm list-none pl-0">
                <li><NavLink to="/faq">Lace matching</NavLink></li>
                <li><NavLink to="/tcs">Color Analysis</NavLink></li>
                <li><NavLink to="/license">Blogs</NavLink></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 pl-3 poppins mb-4 lg:mb-0">
              <h3 className="text-xl mb-2">Resources</h3>
              <ul className="text-sm list-none pl-0">
                <li><NavLink to="/faq">Privacy Policy</NavLink></li>
                <li><NavLink to="/tcs">Terms & Conditions</NavLink></li>
                <li><NavLink to="/license">License</NavLink></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 pl-3 poppins mb-4 lg:mb-0">
              <h3 className="text-xl mb-2">Help</h3>
              <ul className="text-sm list-none pl-0">
                <li><NavLink to="/faq">Customer Care</NavLink></li>
                <li><NavLink to="/tcs">Terms & Conditions</NavLink></li>
                <li><NavLink to="/license">Support</NavLink></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 pl-3 poppins mb-4 lg:mb-0">
              <h3 className="text-xl mb-2">Reach Us</h3>
              <ul className="text-sm list-none pl-0">
                <li><NavLink to="/faq">laceaura@gmail.com</NavLink></li>
                <li><NavLink to="/tcs" className="text-xs leading-3">Shop no. 24, Dhavalgiri CHS Ltd., Hanuman Tekdi, Ashokvan, Dahisar East, Mumbai 400068.</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="text-center poppins mt-8 mb-4">
            <p>&copy; 2024 FinMap, Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
