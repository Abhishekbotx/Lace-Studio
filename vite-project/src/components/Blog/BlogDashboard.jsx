import React from 'react'
import Navbar from '../Navbar'
import Blog from './Blog'

const BlogDashboard = () => {
  return (
    <div>
        <Navbar classname='bg-slate-600'></Navbar >
        <Blog></Blog>
    </div>
  )
}

export default BlogDashboard