import { createContext } from "react";

import * as cartApi from "../../../api/cart";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [productsInUserCart, setProductsInUserCart] = useState();
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = async (data) => {
    const {
      data: { newInCart },
    } = await cartApi.addProductToCart(data);
    return newInCart;
  };

  const getAllInCart = async () => {
    const {
      data: { allInCart },
    } = await cartApi.fetchAllInUserCart();
    setProductsInUserCart(allInCart);
  };

  const removeProductFromCart = async (id) => {
    await cartApi.deleteProductInCart(id);
  };

  const calculateTotal = async () => {
    const {
      data: { allInCart },
    } = await cartApi.fetchAllInUserCart();
    const result = allInCart.reduce((acc, el) => acc + el.productPrice, 0);
    setSubTotal(result);
  };

  useEffect(() => {
    getAllInCart();
    calculateTotal();
  }, []);

  return (
    <CartContext.Provider
      value={{
        getAllInCart,
        addToCart,
        productsInUserCart,
        removeProductFromCart,
        subTotal,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
