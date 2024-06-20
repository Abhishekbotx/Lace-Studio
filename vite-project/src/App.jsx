import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Lacematchingdashboard from './components/LaceMatching/Lacematchingdashboard';
import ColorAnalysisDashboard from './components/ColorAnalysis/ColorAnalysisDashboard';
import Login from './components/Login/Login';
import BlogDashboard from './components/Blog/BlogDashboard';
import ProductPageDashboard from './components/Product/ProductPagedashboard';
import Signup from './components/SignUp/Signup';
import OtpVerificationPage from './components/SignUp/OtpVerification';

const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/lace-matching' element={<Lacematchingdashboard />} />
      <Route path='/color-analysis' element={<ColorAnalysisDashboard />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signup/otp' element={<OtpVerificationPage />} />
      <Route path='/blog' element={<BlogDashboard />} />
      <Route path='/products' element={<ProductPageDashboard />} />
    </Routes>
  );
};

export default App;
