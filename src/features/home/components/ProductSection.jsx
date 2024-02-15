import React from 'react'
import ProductCard from './ProductCard'

function ProductSection() {
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='py-8 font-semibold text-lg'>Long sleeves</h1>
                <div className='flex gap-4 pb-6'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default ProductSection