import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'
import { useEffect } from 'react';

function ProductSection({ type, products }) {

    const [showedProducts, setShowedProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    useEffect(() => {
        const start = (currentPage - 1) * 5
        const end = start + 5
        const displayedProducts = products.slice(start, end)
        setShowedProduct(displayedProducts)
    }, [currentPage])

    return (
        <div className='flex justify-center px-20 pb-2 '>
            <div>
                <h1 className='py-8 font-semibold text-lg'>{type}</h1>
                <div className='flex gap-4 pb-6 '>
                    {showedProducts.map((el) => (
                        <ProductCard key={el.id} product={el} />
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <div className="join">
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>«</button>
                        <button className="join-item btn cursor-text">{currentPage}</button>
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / 5)}>»</button>
                    </div>
                </div>
                <div className='pt-4'>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ProductSection