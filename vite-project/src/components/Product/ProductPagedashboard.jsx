import React from 'react'
import Navbar from '../Navbar'
import ProductPage from './ProductPage'
import Product1 from './../../Img/Product1.jpg';
import Product2 from './../../Img/Product2.jpg';
import Product3 from './../../Img/Product3.jpg';

const products = [
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: '3699',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: '1999',
      brand: 'zara',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: '3299',
      brand: 'h&m',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: '2999',
      brand: 'pepe jeans',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: '3049',
      brand: 'levis',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: '2611',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: '2799',
      brand: 'nike',
      occasion: ['wedding', 'sangeet', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: '3099',
      brand: 'nike',
      occasion: ['wedding', 'sangeet', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: '1699',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: '1799',
      brand: 'nike',
      occasion: ['reception', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: '2899',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: '1649',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: '2410',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: 'XXX',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: 'XXX',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product1,
      title: 'Golden Mocha Floret Lace',
      price: 'XXX',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product2,
      title: 'Vibrant Magenta Blossom Lace',
      price: 'XXX',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
  {
      image: Product3,
      title: 'Vibrant Magenta Blossom Lace',
      price: 'XXX',
      brand: 'nike',
      occasion: ['wedding', 'reception', 'mehendi']
  },
];
const ProductPageDashboard = () => {
  return (
    <div>
        <Navbar classname='bg-slate-600'></Navbar >
        <ProductPage product={products}></ProductPage>
    </div>
  )
}

export default ProductPageDashboard