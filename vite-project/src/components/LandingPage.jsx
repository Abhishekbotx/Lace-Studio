import React from 'react'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import FaishonNeeds from './FaishonNeeds'
import WhoWeAre from './WhoAre We'
import FindYourFitSlider from './FindYourFitSlider'
import PartnersSlider from './Partners'
import ReviewSlider from './ReviewSlider'
import OurFramer from './OurFramer'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <HomeSection></HomeSection>
            <FaishonNeeds></FaishonNeeds>
            <WhoWeAre></WhoWeAre>
            <FindYourFitSlider></FindYourFitSlider>
            <PartnersSlider></PartnersSlider>
            <ReviewSlider></ReviewSlider>
            <OurFramer></OurFramer>
            <Footer></Footer>
        </div>
    )
}

export default LandingPage