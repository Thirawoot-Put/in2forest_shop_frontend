import { createContext } from "react";

import * as cartApi from "../../../api/cart";
import { useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [productsInUserCart, setProductsInUserCart] = useState();

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
    const result = await cartApi.deleteProductInCart(id);
    console.log(result);
  };

  // useEffect(() => {
  //   getAllInCart();
  // }, []);

  return (
    <CartContext.Provider
      value={{
        getAllInCart,
        addToCart,
        productsInUserCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
