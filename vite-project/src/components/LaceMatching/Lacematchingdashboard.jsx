import React from 'react'
import LaceMatching from './LaceMatching'
import Navbar from '../Navbar'
import Footer from '../Footer'
import LaceHome from './LaceHome'

const Lacematchingdashboard = () => {
  return (
    <div className='relative'>
        <Navbar></Navbar>
        <LaceHome></LaceHome>
        <LaceMatching></LaceMatching>
        <Footer></Footer>

    </div>
  )
}

export default Lacematchingdashboard