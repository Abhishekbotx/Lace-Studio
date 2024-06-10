// src/pages/ProductPage.js
import React, { useState } from 'react';
import Filters from './Filters';
import ProductList from './ProductList';
import Pagination from './Pagination'; 
import SearchComponent from './SearchComponent';
import Product1 from './../../Img/Product1.jpg'
import Product2 from './../../Img/Product2.jpg'
import Product3 from './../../Img/Product3.jpg'

const products = [
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product1,
        title: 'Golden Mocha Floret Lace',
        price: 'XXX',
    },
    {
        image: Product2,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    {
        image: Product3,
        title: 'Vibrant Magenta Blossom Lace',
        price: 'XXX',
    },
    // Add more products as needed
];

const productsPerPage = 12;

const ProductPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mx-auto px-4 pb-8">
            <div className='bg-slate-800 w-full h-[7.5rem]'></div>
            <SearchComponent />
            <div className="flex">
                <Filters />
                <ProductList 
                    products={products}
                    currentPage={currentPage}
                    productsPerPage={productsPerPage}
                />
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductPage;
