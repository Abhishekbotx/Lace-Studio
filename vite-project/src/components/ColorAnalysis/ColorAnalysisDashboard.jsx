import React from 'react'
import ColorAnalysis from './ColorAnalysis'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ColorAnalysisDashboard = () => {
  return (
    <div className='relative'>
        <Navbar></Navbar>
        <ColorAnalysis></ColorAnalysis>
        {/* <Footer></Footer> */}
        

    </div>
  )
}

export default ColorAnalysisDashboard