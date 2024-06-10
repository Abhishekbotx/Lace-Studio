import React from 'react'
import Image1 from './../../Img/LaceImage1.png'
import Image2 from './../../Img/LaceImage2.png'
import Image3 from './../../Img/LaceImage3.png'
import Image4 from './../../Img/LaceImage4.png'
import Image5 from './../../Img/LaceImage5.png'
import ImageMain from './../../Img/LaceImageMain.jpg'
import './../../index.css'

const LaceMatching = () => {
    return (
        <div>
            <div className='h-screen '>
                <div className='h-1/2 w-full overflow-hidden bg-red-100' 
                style={{
                    backgroundImage: `url(${ImageMain})`,
                    backgroundPosition: 'center',
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
                        Introducing our revolutionary <span className='custom-color1 '>Lace Matching</span> technology, designed to make finding your perfect saree, lehenga, or kurti. With just a photo upload, our advanced system analyzes the intricate details of lace patterns, textures, and colors to recommend flawlessly matching outfits tailored to your unique style. Say goodbye to endless scrolling and hello to effortless elegance as you explore a curated selection of garments perfectly complementing your chosen lace design. Simply follow these easy steps:
                    </p>
                </div>
                <div>
                    <h1 className='great-vibes-regular text-5xl py-8 custom-color1 text-center'>Steps to search for your dress</h1>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>1.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Upload Your Photo: </span> Begin by selecting a photo of a lace pattern you adore from your device or camera roll. Make sure the lace detail is clearly visible and well-lit.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image1} alt="" className='object-cover  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='  w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>2.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Upload Your Photo: </span> Begin by selecting a photo of a lace pattern you adore from your device or camera roll. Make sure the lace detail is clearly visible and well-lit.</p>
                        </div>
                        <div className='w-full lg:w-1/2  mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image2} alt="" className='object-cover rounded-sm  sm:rounded-md   w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex mb-4 flex-col-reverse  flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className=' w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>3.</p>
                            <p className='poppins leading-7'><span className='custom-color1   font-medium  '>Upload Your Photo: </span> Begin by selecting a photo of a lace pattern you adore from your device or camera roll. Make sure the lace detail is clearly visible and well-lit.</p>
                        </div>
                        <div className='w-full lg:w-1/2   mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image3} alt="" className='object-cover object-center rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex  mb-4 flex-col-reverse flex-wrap lg:flex-row md:flex-row  relative'>
                        <div className='w-full lg:w-1/2 px-[6vw] flex relative top-2'>
                            <p className=' custom-color1 raleway font-bold '>4.</p>
                            <p className='poppins leading-7'><span className='    font-medium custom-color1'>Upload Your Photo: </span> Begin by selecting a photo of a lace pattern you adore from your device or camera roll. Make sure the lace detail is clearly visible and well-lit.</p>
                        </div>
                        <div className='w-full lg:w-1/2    mb-8 h-[40vh] md:h-[30vh] px-[4vw] overflow-hidden'>
                        <img src={Image4} alt="" className='object-cover object-top  rounded-sm  sm:rounded-md w-full h-full' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaceMatching