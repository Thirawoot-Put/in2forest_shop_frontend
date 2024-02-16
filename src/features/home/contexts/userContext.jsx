import { useEffect, useState, createContext } from "react";
import * as userApi from '../../../api/user'

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [allTypesWithProducts, setAllTypesWithProducts] = useState([]);

    const getAllProductTypes = async () => {
        const { data: { typesWithProducts } } = await userApi.getAllTypesWithProducts();
        setAllTypesWithProducts(typesWithProducts)
    }

    useEffect(() => {
        getAllProductTypes();
    }, [])

    return <UserContext.Provider
        value={{ allTypesWithProducts }}>
        {children}
    </UserContext.Provider>
}