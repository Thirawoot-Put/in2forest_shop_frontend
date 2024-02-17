import { useState } from "react";
import { createContext } from "react";
import * as adminApi from '../../../api/admin'
import * as productApi from '../../../api/product'
import appenDataWithImage from "../../../utils/appenDataWithImage";

export const AdminContext = createContext();

const initial = {
    productName: '',
    size: '',
    productDetail: '',
    defect: '',
    price: '',
    productTypeId: '',
    mainImage: null
}

export default function AdminContextProvider({ children }) {
    const [product, setProduct] = useState(initial);
    const [allProductTypes, setAllProductTypes] = useState([]);
    const [entireProduct, setEntireProduct] = useState([]);

    const getAllTypes = async () => {
        const { data: { allTypes } } = await productApi.getAllProductTypes();
        setAllProductTypes(allTypes)
    }

    const getAllProduct = async () => {
        const { data: { allProduct } } = await productApi.getAllProduct();
        setEntireProduct(allProduct)
    }

    const handleChange = e => {
        if (e.target.name === 'mainImage') {
            setProduct({ ...product, mainImage: e.target.files[0] })
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        appenDataWithImage(formData, product)
        await adminApi.addProduct(formData)
        setProduct(initial)
    }


    return (
        <AdminContext.Provider
            value={{
                product,
                allProductTypes,
                entireProduct,
                getAllTypes,
                handleChange,
                handleSubmit,
                getAllProduct,
            }}>
            {children}
        </AdminContext.Provider>
    )
}