import React from 'react'

function ProductCardHorizontal({ children, data }) {

    return (
        <div className='w-[44rem] h-full'>
            <div className="card card-side bg-base-100 border-gray-500 h-32 ">
                <div className='rounded-xl flex justify-center items-center'>
                    <img className='w-32' src={data.mainImage ? data.mainImage : "/src/assets/default-img.png"} alt="main-image" />
                </div>
                <div className="flex items-center justify-between w-full pl-4 pr-10">
                    <div>
                        <h2 className="card-title">{data.id} {data.productName}</h2>
                        <p className='text-sm text-gray-500'>Size : {data.size}</p>
                        <p className='text-sm text-gray-500'>Defect: {data.defect}</p>
                        <h2 className="card-title">THB {data.price}</h2>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardHorizontal