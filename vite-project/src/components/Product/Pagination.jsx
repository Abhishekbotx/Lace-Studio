// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination text-center mt-8">
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page-btn bg-gray-200 border rounded px-4 py-2 mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>  
    );
}; 

export default Pagination;
