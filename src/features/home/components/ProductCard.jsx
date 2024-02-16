import React from 'react'

function ProductCard({ product }) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='bg-[#F0EEED] w-[200px] aspect-[2/3] flex justify-center items-center rounded-lg'>
                <img className='w-32' src={product.mainImage || "/src/assets/default-img.png"} alt="product-image" />
            </div>
            <div className='text-gray-400 w-40'>
                <h1 className='font-semibold text-lg text-black'>{product.id} {product.productName}</h1>
                <p className=''>Size: {product.size}</p>
                <p>THB {product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard