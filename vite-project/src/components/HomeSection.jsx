import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from './../Img/1st.png';
import image2 from './../Img/2nd_.jpg';
import backgroundImage from './../Img/1st.png'
const HomeSection = () => {
    return (
        <div className=" h-3/4 w-full flex justify-center items-center bg-gray-100">
            <Swiper
                pagination={{ clickable: true, el: '.custom-pagination', }}
                modules={[Pagination]}
                direction=''
                className="  relative h-[100vh]"
            >
                <SwiperSlide className="relative bg-black" style={{
                    backgroundImage: `url(${image1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    {/* <img src={image1} alt="Slide 1" className="object-cover  w-full" /> */}
                    <div className="text-white absolute bottom-0 right-12 flex flex-col items-center pb-4 px-4 w-[60vw]">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl mt-4 text-center gabriela-regular uppercase">Find your clothing items</h1>
                        {/* <div className="border-t border-white w-full mt-6"></div> */}
                        <p className="max-w-6xl text-center mt-4 mb-4 text-sm md:text-base lg:text-lg  ">
                        Join the Culture: Find Your Unique Style Statement!
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
                    <div className='text-white z-50 text-[4vw] absolute bottom-20 left-1/3 k bg-opacity-50 font-serif p-4 rounded-md capitalize'>
                        Now kurtis are one click away
                    </div>
                    <div className='text-white z-50 text-[2vw] absolute bottom-10 left-1/3 k bg-opacity-50 font-serif p-4 rounded-md capitalize'>
                        join the culture; Find your unique style statement!
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image1} alt="Slide 1" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image1} alt="Slide 1" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image1} alt="Slide 1" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <div className="text-4xl">Slide 9</div>
                </SwiperSlide>

                {/* Custom pagination container */}
                <div className="custom-pagination absolute z-40 left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2"></div>
            </Swiper>
        </div>
    );
}

export default HomeSection;
