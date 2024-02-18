import { useEffect, useState, createContext } from "react";
import * as productApi from "../../../api/product";

export const ProductContext = createContext();

export default function UserContextProvider({ children }) {
  const [allTypesWithProducts, setAllTypesWithProducts] = useState([]);
  const [productObj, setProductObj] = useState({});

  const getAllProductTypes = async () => {
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
    getAllProductTypes();
  }, []);

  return (
    <ProductContext.Provider
      value={{ allTypesWithProducts, getProductById, productObj }}
    >
      {children}
    </ProductContext.Provider>
  );
}
