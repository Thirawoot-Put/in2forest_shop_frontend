import { createContext } from "react";

import * as cartApi from "../../../api/cart";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [productsInUserCart, setProductsInUserCart] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
  const [isIncludeSoldOut, setIsInCludeSoldOut] = useState(false);

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

  const hasSoldOut = () => {
    const foundSoldOut = productsInUserCart.filter(
      (el) => el.product.status === "SOLDOUT"
    );
    if (foundSoldOut.length !== 0) {
      setIsInCludeSoldOut(true);
    } else {
      setIsInCludeSoldOut(false);
    }
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
        hasSoldOut,
        isIncludeSoldOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
