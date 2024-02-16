import React from 'react'
import { useEffect } from 'react'
import useAdmin from '../../../hooks/use-admin'
import ProductForm from '../../../components/ProductForm'

function AddProductForm() {
    const { product, getAllTypes, handleChange, handleSubmit } = useAdmin();

    useEffect(() => {
        getAllTypes()
    }, [])

    return (
        <div className='py-8'>
            <ProductForm title="Add new product" onSubmit={handleSubmit} onChange={handleChange} data={product} />
        </div>
    )
}

export default AddProductForm