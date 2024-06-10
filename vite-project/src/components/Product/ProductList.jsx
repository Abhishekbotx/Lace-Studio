// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, productsPerPage, currentPage }) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="w-3/4 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {currentProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;
