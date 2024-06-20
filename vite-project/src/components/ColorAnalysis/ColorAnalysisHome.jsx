import React from 'react'
import ImageMain from './../../Img/color-analysis1.png'
const ColorAnalysisHome = () => {
  return (
    <div  className='h-screen'>
        <div className='h-1/2 pb-12 w-full overflow-hidden bg-red-100'
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
                    <p className='text-center  px-[4vw] mb-6 poppins '>
                        Discover your most flattering colors effortlessly with our innovative <span className='custom-color1   font-semibold'>Color Analysis</span> feature. With just one selfie, our smart system works its magic, analyzing your skin tone to unveil a palette of hues that enhance your natural radiance. Say goodbye to guesswork and hello to effortless beauty discovery right at your fingertips. Here's how it works:
                    </p>
                </div>
    </div>
  )
}

export default ColorAnalysisHome