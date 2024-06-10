import React from 'react';
import Marquee from "react-fast-marquee";
import './../index.css';
import HNM from  './../Img/HNM.png'
import Adidas from './..//Img/Adidas.png'
import Zara from './../Img/Zara.png'
import Puma from './..//Img/Puma.png'
import Nike from './..//Img/Nike.png'
import Pepe from './..//Img/Pepe.png'
import Levis from './..//Img/Levis.png'
import Gucci from './..//Img/Gucci.png'
const PartnersSlider = () => {
  return (
    <div className="overflow-x-hidden py-10 bg-slate-100 relative">
      {/* <h1 className="text-3xl font-bold text-center mb-10">Achieve more with our trusted partners</h1> */}
      <Marquee 
      speed={100} 
      gradient={true}
      // gradientColor={' bg-'} // white gradient
        gradientWidth={100}
        pauseOnHover={true}
      >
        <img
          src={HNM}
          alt="Shriram Group Official Logo"
          className="h-8  mix-blend-darken md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Adidas}
          alt="Axis Bank"
          className="h-8 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Gucci}
          alt="Bajaj Finserv"
          className="h-8 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Nike}
          alt="Kotak Mahindra Group"
          className="h-12 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Pepe}
          alt="Shriram Group Official Logo"
          className="h-8 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Levis}
          alt="Axis Bank"
          className="h-8 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Zara}
          alt="Bajaj Finserv"
          className="h-12 md:h-12 mx-10 md:mx-10"
        />
        <img
          src={Puma}
          alt="Kotak Mahindra Group"
          className="h-8 md:h-12 mx-10 md:mx-10"
        />
      </Marquee>
    </div>
  );
};

export default PartnersSlider;
