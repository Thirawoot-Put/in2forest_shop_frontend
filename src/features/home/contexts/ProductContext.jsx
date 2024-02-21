import { useEffect, useState, createContext } from "react";
import * as productApi from "../../../api/product";
import useCart from "../../../hooks/use-cart";

export const ProductContext = createContext();

export default function UserContextProvider({ children }) {
  const [allTypesWithProducts, setAllTypesWithProducts] = useState([]);
  const [productObj, setProductObj] = useState({});

  const getAllTypesWithProducts = async () => {
    const {
      data: { typesWithProducts },
    } = await productApi.getAllTypesWithProducts();
    setAllTypesWithProducts(typesWithProducts);
  };

  const getProductById = async (id) => {
    const {
      data: { productById },
    } = await productApi.getProductById(id);
    setProductObj(productById);
    return productById;
  };

  useEffect(() => {
    getAllTypesWithProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        allTypesWithProducts,
        getProductById,
        productObj,
        getAllTypesWithProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
