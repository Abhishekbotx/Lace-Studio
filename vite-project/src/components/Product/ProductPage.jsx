import React, { useState } from 'react';
import Filters from './Filters';
import ProductList from './ProductList';
import Pagination from './Pagination';
import SearchComponent from './SearchComponent';
import Product1 from './../../Img/Product1.jpg';
import Product2 from './../../Img/Product2.jpg';
import Product3 from './../../Img/Product3.jpg';



const productsPerPage = 12;

const ProductPage = ({product}) => {
    console.log('product:',product);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        brand: [],
        occasion: [],
        size: []
    });

    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (updatedFilters[category].includes(value)) {
                updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
            } else {
                updatedFilters[category].push(value);
            }
            return updatedFilters;
        });
    };

    const filterProducts = (products) => {
        return products.filter((product) => {
            const matchBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
            const matchOccasion = filters.occasion.length === 0 || (product.occasion && filters.occasion.some((occasion) => product.occasion.includes(occasion)));
            const matchSize = filters.size.length === 0 || (product.size && filters.size.includes(product.size));
            console.log('response of filter :',matchBrand && matchOccasion && matchSize);
            return matchBrand && matchOccasion && matchSize;

        });
    };

    const filteredProducts = filterProducts(product);
    console.log('filtered products:',filteredProducts);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mx-auto px-4 pb-8">
            <div className='bg-slate-800 w-full h-[7.5rem]'></div>
            <SearchComponent />
            <div className="flex">
                <Filters filters={filters} handleFilterChange={handleFilterChange} />
                <ProductList
                    products={filteredProducts}
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
