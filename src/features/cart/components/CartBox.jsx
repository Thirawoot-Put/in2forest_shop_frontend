import React from "react";
import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import { HiTrash } from "react-icons/hi2";
import useCart from "../../../hooks/use-cart";
import { useState } from "react";
import { useEffect } from "react";
import LoadingBar from "../../../components/LoadingBar";

function CartBox() {
  const { getAllInCart, productsInUserCart, removeProductFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    try {
      setLoading(true);
      removeProductFromCart(id);
    } catch (err) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllInCart();
  }, [loading]);

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className="w-7/12 border p-4 border-black rounded-2xl min-h-80 flex flex-col">
      {productsInUserCart &&
        productsInUserCart.map((el) => (
          <ProductCardHorizontal key={el.id} data={el.product} width="w-full">
            <button
              className="text-xl text-red-500"
              onClick={(e) => removeProductFromCart(el.id)}
            >
              <HiTrash />
            </button>
          </ProductCardHorizontal>
        ))}
    </div>
  );
}

export default CartBox;
