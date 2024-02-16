import React from 'react'
import AdminProductCard from './AdminProductCard'
import useAuth from '../../../hooks/use-auth'
import useAdmin from '../../../hooks/use-admin';
import { useEffect } from 'react';

function ProductList() {
    const { authUser: { firstName, lastName } } = useAuth();

    return (
        <>
            <h1 className='font-semiboldbold text-2xl'>Admin, {firstName ? firstName : ''}  {lastName ? lastName : ''}</h1>
            <div>
                <AdminProductCard />
            </div>
        </>
    )
}

export default ProductList