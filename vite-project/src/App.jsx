import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Lacematchingdashboard from './components/LaceMatching/Lacematchingdashboard';
import ColorAnalysisDashboard from './components/ColorAnalysis/ColorAnalysisDashboard';
import Login from './components/Login/Login';
import BlogDashboard from './components/Blog/BlogDashboard';
import ProductPageDashboard from './components/Product/ProductPagedashboard';



const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/lace-matching' element={<Lacematchingdashboard/>}/>
        <Route path='/color-analysis' element={<ColorAnalysisDashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog' element={<BlogDashboard/>}/>
        <Route path='/products' element={<ProductPageDashboard/>}/>
      </Routes>
    </Router>

  )
};

export default App;
