import React from 'react'
import Image1 from './../Img/FashionImage1.png'
import Image2 from './../Img/FashionImage2.png'
import Image3 from './../Img/FashionImage3.jpg'
const FaishonNeeds = () => {
    return (
        <div className='px-4 pt-8 pb-16 bg-white w-full '>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-5xl space-x-16  great-vibes-regular  custom-color1 text-center'>Find your Fashion needs That Suits you </h1>
                <p className=' text-center text-slate-800  text-lg px-8'>A diverse range of lace fabrics in different colors and patterns, along with accessories like ribbons and beads, cater to every woman's lace needs. Ideal for both seasoned lace enthusiasts and beginners looking to create stylish pieces.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-6 items-center justify-center mx-8 ">
                <div className='w-full h-[50vh] md:h-[60vh] rounded-sm overflow-hidden'>
                <img
                    src={Image1}
                    alt="Fashion 1"
                    className=" object-cover w-full h-full "
                />
                <p></p>
                </div>
                <div className='w-full h-[50vh] md:h-[60vh] rounded-sm overflow-hidden'>
                <img
                    src={Image2}
                    alt="Fashion 1"
                    className=" object-cover object-top w-full h-full "
                />
                </div>
                <div className='w-full h-[50vh] md:h-[60vh] rounded-sm overflow-hidden'>
                <img
                    src={Image3}
                    alt="Fashion 1"
                    className=" object-cover w-full h-full "
                />
                </div>
                
            </div>
        </div>
    )
}

export default FaishonNeeds