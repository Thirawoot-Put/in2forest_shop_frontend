import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { useEffect } from 'react'
import useAdmin from '../../../hooks/use-admin'
import SelectTypes from './SelectTypes'
import { useState } from 'react'

function AddProductForm() {
    const { product, getAllTypes, handleChange, handleSubmit } = useAdmin();

    useEffect(() => {
        getAllTypes()
    }, [])

    return (
        <form className='flex flex-col items-center py-12' encType='multipart/form-data' onSubmit={handleSubmit}>
            <h1 className='font-semibold text-2xl pb-5'>Add new product</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4'>
                    <div>
                        <Input title="Product name" name="productName" onChange={handleChange} value={product.productName} />
                    </div>
                    <div>
                        <Input title="Size" name="size" onChange={handleChange} value={product.size} />
                    </div>
                </div>
                <Input title="Product detail" name="productDetail" width='w-full' onChange={handleChange} value={product.productDetail} />
                <Input title="Defect" name="defect" width='w-full' onChange={handleChange} value={product.defect} />
                <Input title="Price" name="price" width='w-full' onChange={handleChange} value={product.price} />
                <SelectTypes />
                <div className='pt-6'>
                    <Input type='file' name="mainImage" width='w-full' onChange={handleChange} />
                </div>
                <div className='pt-10'>
                    <Button color="primary" width="full" type='submit'>Save</Button>
                </div>
            </div>
        </form>
    )
}

export default AddProductForm