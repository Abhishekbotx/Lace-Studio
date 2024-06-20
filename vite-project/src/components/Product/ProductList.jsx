import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, currentPage, productsPerPage }) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="">
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
