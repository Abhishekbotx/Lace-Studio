import React, { useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/auth";

import Image from './../../Img/signinImage.jpg'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('signin hit');
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/signin",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            console.log("response in browser:", response);

            if (response) {

                navigate("/user-dashboard");
            } else {

            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                if (error.response.data.message === "Profile Inactive") {
                    toast.info("Profile Inactive wait for admin acceptance");
                } else {
                    toast.error("Signin failed: " + error.response.data.message);
                }
            } else {
                toast.error(" Login failed check internet connection");
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex  w-screen  bg-slate-200">
            <div className="lg:w-1/2">
                <div
                    className="flex flex-col bg-slate items-center justify-center min-h-screen bg-cover bg-center relative"

                >



                    <div className="bg-slate-200 w-full h-full   text-center py-8">
                        <div className="text-4xl  mb-8 text-center roboto-slab-medium  custom-color1">My Lace Studio</div>

                        <div className=" font-bold mb-4  tracking-widest great-vibes-regular custom-color1 text-5xl">Hey Welcome Back</div>
                        <label htmlFor="password" className="block ml-8 text-gray-700 font-bold mb-2 text-start">
                            Email/Phone No
                        </label>
                        <div className="mb-4 px-8  ">
                            <input
                                type="text"
                                placeholder="Email..."
                                className="w-full px-4 py-2  border-slate-700 border-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <label htmlFor="password" className="block ml-8 text-gray-700 font-bold mb-2 text-start">
                            Password
                        </label>
                        <div className="relative px-8 ">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 rounded-sm  border-2 border-slate-800 focus:outline-none "
                                onChange={(e)=>setPassword(e.target.value)}
                                
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute z-20 right-10 top-2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                            <div className="mt-4 mb-4 text-center">
                                <a href="/forgot-password" className="custom-color1 hover:text-pink-700">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="m-6 ">
                                <button
                                    onClick={handleSubmit}
                                    className="w-full  py-2  border-slate-700   text-2xl bg-yellow-100  text-slate-800  rounded-md hover:bg-yellow-300 transition-colors duration-300 great-vibes-regular"
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <NavLink to={"/signup"} className="text-slate-700 hover:text-pink-700">
                                    Haven't joined yet?Sign Up
                                </NavLink>
                            </div>

                        </div>

                    </div>
                </div>
               
            </div>
            <div className="bg-red-600 z-20 w-1/2 bg-no-repeat bg-cover bg-top  hidden-class" style={{ backgroundImage: `url(${Image})`,
         }}>
                   
                </div>
        </div>
    );
};

export default Login;
