import React from 'react'
import ImageMain from './../../Img/LaceImageMain.jpg'
const LaceHome = () => {
    return (
        <div className='h-screen'>

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
                <p className='text-center  px-[4vw] mb-6 poppins'>
                    Introducing our revolutionary <span className='custom-color1 font-semibold'>Lace Matching</span> technology, designed to make finding your perfect saree, lehenga, or kurti. With just a photo upload, our advanced system analyzes the intricate details of lace patterns, textures, and colors to recommend flawlessly matching outfits tailored to your unique style. Say goodbye to endless scrolling and hello to effortless elegance as you explore a curated selection of garments perfectly complementing your chosen lace design. Simply follow these easy steps:
                </p>
            </div>
        </div>
    )
}

export default LaceHome