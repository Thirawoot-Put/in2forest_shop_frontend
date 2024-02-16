import React from 'react'
import ProductSection from './ProductSection'
import useUser from '../../../hooks/use-user';

function ProductAllSections() {
    const { allTypesWithProducts } = useUser();

    return (
        <div className='bg-[#f9f9f9]'>
            {allTypesWithProducts.map((el) => (
                <ProductSection key={el.id} type={el.type} products={el.products} />
            ))}
        </div>
    )
}

export default ProductAllSections