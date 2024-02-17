import React from 'react'
import ProductSection from './ProductSection'
import useProduct from '../../../hooks/use-product';

function ProductAllSections() {
    const { allTypesWithProducts } = useProduct();

    return (
        <div className='bg-[#f9f9f9]'>
            {allTypesWithProducts.map((el) => (
                <ProductSection key={el.id} type={el.type} products={el.products} />
            ))}
        </div>
    )
}

export default ProductAllSections