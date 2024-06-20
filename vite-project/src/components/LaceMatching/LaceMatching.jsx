import React from 'react'
import Image1 from './../../Img/LaceImage1.png'
import Image2 from './../../Img/LaceImage2.png'
import Image3 from './../../Img/LaceImage3.png'
import Image4 from './../../Img/LaceImage4.png'
import Image5 from './../../Img/LaceImage5.png'

import './../../index.css'

const LaceMatching = () => {
    return (
        <div>
            <div className=' '>
                
                <div>
                    <h1 className='great-vibes-regular text-5xl py-8 custom-color1 text-center'>Steps to search for your dress</h1>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>1.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Capture Your Selfie: </span> Start by taking a selfie. Make sure your face is well-lit and the image is clear. This will help our system accurately analyze your skin tone.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                            <img src={Image1} alt="" className='object-cover  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='  w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>2.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Our System Works Its Magic: </span> Once you've uploaded your selfie, our intelligent system goes to work! It carefully examines your skin tone, considering factors like undertones and complexion to determine your unique color profile.</p>
                        </div>
                        <div className='w-full lg:w-1/2  mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                            <img src={Image2} alt="" className='object-cover rounded-sm  sm:rounded-md   w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse  flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>3.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Discover Your Perfect Color: </span> After the analysis, we reveal a personalized palette of colors tailored just for you. From warm earthy tones to cool pastels, your perfect colors are now at your fingertips.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                            <img src={Image3} alt="" className='object-cover object-center rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex  mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>4.</p>
                            <p className='poppins leading-7'><span className='    font-medium custom-color1'>Explore Matching Products: </span> With your personalized color palette in hand, explore our collection of sarees, lehengas, kurtis, and more—all curated to match your unique tones. Discover the ideal outfit that not only looks great but also makes you feel confident and radiant.</p>
                        </div>
                        <div className='w-full lg:w-1/2    mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                            <img src={Image4} alt="" className='object-cover object-top  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className=' text-start text-lg poppins leading-7 flex  mb-4 sm:ml-16 px-6 mt-12 text-gray-700 flex-wrap lg:flex-row md:flex-row  relative'>
                        <p>With these simple steps, you'll uncover the colors that make you shine and effortlessly elevate your style. Experience the joy of personalized beauty discovery with our Color Analysis feature.</p>


                    </div>
                    <div className=' flex justify-center '>

                        <button className='mb-6 text-center text-white poppins-md rounded-sm px-4 py-2 bg-gray-00'>Get Started</button>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default LaceMatching