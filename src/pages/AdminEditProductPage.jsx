import React from 'react'
import ProductList from '../features/admin/conponents/ProductList'
import useAdmin from '../hooks/use-admin';
import { useEffect } from 'react';

function AdminEditProductPage() {
    const { getAllProduct } = useAdmin();

    useEffect(() => {
        getAllProduct();
    }, [])


    return (
        <div className='h-screen w-full flex flex-col justify-center items-center pb-4'>
            <ProductList />
        </div>
    )
}

export default AdminEditProductPage