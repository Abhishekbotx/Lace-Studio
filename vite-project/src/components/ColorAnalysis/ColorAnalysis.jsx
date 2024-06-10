import React from 'react'
import Image1 from './../../Img/LaceImage1.png'
import Image2 from './../../Img/LaceImage2.png'
import Image3 from './../../Img/LaceImage3.png'
import Image4 from './../../Img/LaceImage4.png'
import Image5 from './../../Img/LaceImage5.png'
import ImageMain from './../../Img/color-analysis1.png'
import './../../index.css'
import Footer from '../Footer'

const ColorAnalysis = () => {
    return (
        <div className=' mb-16'>
            <div className='h-screen '>
                <div className='h-2/3 w-full overflow-hidden bg-red-100' 
                style={{
                    backgroundImage: `url(${ImageMain})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    
                }}
            >
                    {/* <img src={ImageMain} className='  ' alt="" /> */}
                </div>
                <div>
                    <p className=' great-vibes-regular text-6xl tracking-wider custom-color1 text-center pt-10 py-8'>
                        How we help you to find your fit
                    </p>
                    <p className='text-center  px-[4vw] mb-6'>
                    Discover your most flattering colors effortlessly with our innovative <span className='custom-color1'>Color Analysis</span> feature. With just one selfie, our smart system works its magic, analyzing your skin tone to unveil a palette of hues that enhance your natural radiance. Say goodbye to guesswork and hello to effortless beauty discovery right at your fingertips. Here's how it works:
                    </p>
                </div>
                <div>
                    <h1 className='great-vibes-regular text-5xl py-8 custom-color1 text-center'>How does it work</h1>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>1.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Capture Your Selfie: </span>  Start by taking a selfie. Make sure your face is well-lit and the image is clear. This will help our system accurately analyze your skin tone.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image1} alt="" className='object-cover rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='  w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>2.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Our System Works Its Magic </span> Once you've uploaded your selfie, our intelligent system goes to work! It carefully examines your skin tone, considering factors like undertones and complexion to determine your unique color profile.</p>
                        </div>
                        <div className='w-full lg:w-1/2  mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image2} alt="" className='object-cover rounded-sm  sm:rounded-md   w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse  flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>3.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Discover Your Perfect Colors: </span> After the analysis, we reveal a personalized palette of colors tailored just for you. From warm earthy tones to cool pastels, your perfect colors are now at your fingertips.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image3} alt="" className='object-cover  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex  mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>4.</p>
                            <p className='poppins leading-7'><span className='    font-medium custom-color1'>Explore Matching Products: </span>  With your personalized color palette in hand, explore our collection of sarees, lehengas, kurtis, and more—all curated to match your unique tones. Discover the ideal outfit that not only looks great but also makes you feel confident and radiant.</p>
                        </div>
                        <div className='w-full lg:w-1/2    mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image4} alt="" className='object-cover  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ColorAnalysis