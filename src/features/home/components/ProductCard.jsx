import React from 'react'

function ProductCard() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='bg-[#F0EEED] w-[200px] aspect-[2/3] flex justify-center items-center rounded-lg'>
                <img className='w-32' src="/src/assets/default-img.png" alt="product-image" />
            </div>
            <div className='text-gray-400'>
                <h1 className='font-semibold text-lg text-black'>Product Name</h1>
                <p>brand name</p>
                <p>THB price</p>
            </div>
        </div>
    )
}

export default ProductCard