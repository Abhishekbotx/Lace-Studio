import React from 'react'
import framerImage from './../Img/Framer.png'

const OurFramer = () => {
    return (

        <div className="px-4 pt-8 bg-white w-full pb-2  flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl great-vibes-regular custom-color1 text-center mb-6">
                Our Framer
            </h1>
            <div className="flex flex-col-reverse gap-x-8 lg:flex-row justify-between items-center w-full max-w-5xl">
                <div className="lg:w-2/3  text-center lg:text-left mb-6 lg:mb-0 font-serif">
                    <p className="text-xl text-slate-800 mb-4 px-4 poppins tracking-wide leading-16  ">
                    Nathaly, who is only 16, is not your typical teen. This dynamo is the founder of My Lace Studio, demonstrating that age is just a number when it comes to pursuing your ambitions. Nathaly, who has a creative heart and a love for the delicate world of lace, has created a space where she can express her passion and bring gorgeous creations to life.
                    </p>
                    
                </div>
                <div className="lg:w-1/3 flex justify-center h-[50vh] overflow-hidden   bg-slate-300 mb-4">
                    <img
                        src={framerImage}
                        alt="Smiling woman in traditional dress"
                        className="w-full h-auto object-cover    rounded-lg shadow-lg"
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default OurFramer