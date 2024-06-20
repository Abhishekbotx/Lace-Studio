import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './../index.css'; // Ensure this imports your Swiper CSS
import background1 from './../Img/view-image1.jpg';
import background2 from './../Img/view-image2.png';

const FindYourFitSlider = () => {
  return (
    <div className='px-4 md:px-[4vw] bg-white h-min-screen'>
      <div className='text-center text-2xl md:text-6xl tracking-wider great-vibes-regular custom-color1 pt-8 mb-8'>
        How we help you to find your fit
      </div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
          }}

          className='py-4 lg:px-[10vw] md:px-[10vw] px-5vw rounded-sm'
        >
          <div className="flex flex-col items-center justify-center h-full px-8 md:px-8">
            <p className='great-vibes-regular text-white text-4xl md:text-6xl'>Lace matching</p>
            <p className='text-white font-serif mt-4 md:mt-8 text-sm md:text-base text-center '>
              Easily find your perfect saree, lehenga, or kurti with our lace matching tech. Upload a photo of lace and we'll recommend flawlessly matching outfits. Say goodbye to endless searching and hello to effortless elegance.
            </p>
            <button className='px-4 py-2 mt-4 mb-7 md:mt-8 rounded-md text-slate-800 view-services-custome-color'>View Services</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}

          className='py-2 lg:px-[10vw] md:px-[10vw] px-5vw rounded-sm'
        >
          <div className="flex flex-col items-center justify-center h-full px-10 md:px-8">
            <p className='great-vibes-regular text-white text-4xl md:text-6xl mt-4'>Skin Color Analysis</p>
            <p className='text-white font-serif mt-4 md:mt-8 text-sm md:text-base text-center'>
              With just one selfie, our smart system analyzes your skin tone to reveal colors that enhance your natural radiance. Effortless beauty discovery at your fingertips.
            </p>
            <button className='px-4 py-2 mt-4 mb-7 md:mt-8 rounded-md text-slate-800 view-services-custome-color'>View Services</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FindYourFitSlider;
