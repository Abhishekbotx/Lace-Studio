import React from 'react'
import ColorAnalysis from './ColorAnalysis'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ColorAnalysisHome from './ColorAnalysisHome'

const ColorAnalysisDashboard = () => {
  return (
    <div className='relative'>
        <Navbar></Navbar>
        <ColorAnalysisHome></ColorAnalysisHome>
        <ColorAnalysis></ColorAnalysis>
        <Footer></Footer>
        

    </div>
  )
}

export default ColorAnalysisDashboard