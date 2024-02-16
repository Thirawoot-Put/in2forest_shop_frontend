import React from 'react'

import ProductCardHorizontal from '../../../components/ProductCardHorizontal';
import { MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import useAdmin from '../../../hooks/use-admin';
import Modal from '../../../components/Modal'
import ProductForm from '../../../components/ProductForm';
import { useState } from 'react';
import * as adminApi from '../../../api/admin'
import LoadingBar from '../../../components/LoadingBar';
import { useEffect } from 'react';
import appenDataWithImage from '../../../utils/appenDataWithImage';

function AdminProductCard() {
    const { entireProduct, getAllProduct } = useAdmin();
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [updateData, setUpdateData] = useState({})


    useEffect(() => {
        getAllProduct()
    }, [loading])

    const handleDeleteProduct = async (productId) => {
        try {
            setLoading(true)
            await adminApi.deleteProduct(productId)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleClickEdit = async (id, e) => {
        const { data: { oldData } } = await adminApi.getProductById(id)
        // delete oldData.mainImage
        oldData.mainImage = ''
        setUpdateData(oldData)
        setOpen(true)
    }

    const handleChange = e => {
        if (e.target.name === 'mainImage') {
            setUpdateData({ ...updateData, mainImage: e.target.files[0] })
        } else {
            setUpdateData({ ...updateData, [e.target.name]: e.target.value });
        }
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        appenDataWithImage(formData, updateData)
        await adminApi.editProductById(updateData.id, formData)
        handleCloseModal()
    }

    return (
        <div>
            {loading && <LoadingBar />}
            <div >
                {entireProduct.map((data) => (
                    <>
                        <ProductCardHorizontal key={data.id} data={data}>
                            <button className='text-xl text-gray-800' onClick={e => handleClickEdit(data.id)}><MdEdit /></button>
                            <button className='text-xl text-red-500' onClick={e => handleDeleteProduct(data.id)} ><HiTrash /></button>
                        </ProductCardHorizontal>
                        <hr className='border-gray-300' />
                    </>
                ))}
                {open && (
                    <Modal onClose={handleCloseModal}>
                        <ProductForm title="Edit product" onSubmit={handleSubmit} onChange={handleChange} data={updateData} />
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default AdminProductCard