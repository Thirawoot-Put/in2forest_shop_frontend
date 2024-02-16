import React from 'react'

import ProductCardHorizontal from '../../../components/ProductCardHorizontal';
import { MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import useAdmin from '../../../hooks/use-admin';

function AdminProductCard() {
    const { entireProduct } = useAdmin();

    return (
        <>
            {entireProduct.map((data) => (
                <>
                    <ProductCardHorizontal data={data}>
                        <button className='text-xl text-gray-800'><MdEdit /></button>
                        <button className='text-xl text-red-500'><HiTrash /></button>
                    </ProductCardHorizontal>
                    <hr className='border-gray-300' />
                </>
            ))}
        </>
    )
}

export default AdminProductCard