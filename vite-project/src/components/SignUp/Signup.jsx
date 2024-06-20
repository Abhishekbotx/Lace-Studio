import React, { useState } from "react";

// import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/auth";

import Image from './../../Img/signinImage.jpg'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await axios.post(
    //             "http://localhost:3001/api/v1/AdminSignin",
    //             {
    //                 email,
    //                 password,
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 withCredentials: true,
    //             }
    //         );

    //         console.log("response in browser:", response.data);

    //         if (response.data.success) {
    //             setAuth((prevAuth) => ({
    //                 ...prevAuth,
    //                 adminToken: response.data.token,
    //                 admin: response.data.user
    //             }));
    //             toast.success("Login successful");
    //             localStorage.setItem("adminAuth", JSON.stringify(response.data));
    //             navigate("/privatezxl-dashboard");
    //         } else {
    //             if (response.data.message === "Profile Inactive") {
    //                 toast.info("Profile is inactive");
    //             } else {
    //                 toast.error("Please check your username and password");
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         if (error.response && error.response.data && error.response.data.message) {
    //             if (error.response.data.message === "Profile Inactive") {
    //                 toast.info("Profile Inactive wait for admin acceptance");
    //             } else {
    //                 toast.error("Signin failed: " + error.response.data.message);
    //             }
    //         } else {
    //             toast.error(" Login failed check internet connection");
    //         }
    //     }
    // };

    const handleSignup = () => {
        const details = `?fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        navigate(`/signup/otp/${details}`);
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };




    return (
        <div style={ { overflowX:"hidden"}} className="flex  w-screen    bg-slate-200">
            <div className="lg:w-1/2">
                <div
                    className="flex flex-col bg-slate items-center justify-center min-h-screen bg-cover bg-center relative"

                >



                    <div className="bg-slate-200 w-full h-full   text-center py-8">
                        <div className="text-4xl  mb-8 text-center roboto-slab-medium  custom-color1">My Lace Studio</div>

                        
                        <div className=" font-bold mb-4  tracking-widest great-vibes-regular custom-color1 text-5xl">Hey Welcome Back</div>
                        <label htmlFor="password" className="block ml-8 text-gray-700 font-bold mb-2 text-start">
                            Full Name
                        </label>
                        <div className="mb-4 px-8  ">
                            <input
                                type="text"
                                placeholder="Enter your name . . ."
                                className="w-full px-4 py-2  border-slate-700 border-2 rounded-sm focus:outline-none "
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <label htmlFor="password" className="block ml-8 text-gray-700 font-bold mb-2 text-start">
                            Email/Phone No
                        </label>
                        <div className="mb-4 px-8  ">
                            <input
                                type="text"
                                placeholder="Enter your email or  phone..."
                                className="w-full px-4 py-2  border-slate-700 border-2 rounded-sm focus:outline-none "
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
                                onChange={(e) => setPassword(e.target.value)}

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
                            <div className="mt-4 mb-4 text-center flex  justify-center items-start    gap-x-5">
                                <div>
                                    <input type="checkbox" className=" relative top-1" />
                                </div>
                                <div className=" hover:text-pink-700 text-zinc-800  relative  md:top-0 md:tracking-wide tracking-wide text-start">
                                    I agree to the <span className="  underline"> <a href="">terms of use</a></span> and <span className=" underline"> <a href=""> privacy policy</a></span>
                                </div>
                            </div>
                            <div className="my-6 ">
                                <button
                                    // onClick={handleSubmit}
                                    onClick={handleSignup}
                                    className="w-full  py-2  border-slate-700   text-2xl bg-yellow-200  text-slate-800  rounded-md hover:bg-yellow-300 transition-colors duration-300 great-vibes-regular"
                                >
                                    Sign Up
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
            <div className="bg-red-600 z-20 w-1/2 bg-no-repeat bg-cover bg-top  hidden-class" style={{
                backgroundImage: `url(${Image})`,
            }}>

            </div>
        </div>
    );
};

export default Signup;
