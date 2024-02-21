import React from "react";
import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import { HiTrash } from "react-icons/hi2";
import useCart from "../../../hooks/use-cart";

function CartBox({ onClick }) {
  const { productsInUserCart } = useCart();

  return (
    <div className="w-7/12 border p-4 border-black rounded-2xl min-h-80 flex flex-col">
      {productsInUserCart &&
        productsInUserCart.map((el) => (
          <ProductCardHorizontal key={el.id} data={el.product} width="w-full">
            <button
              className="text-xl text-red-500"
              onClick={(e) => onClick(el.id)}
            >
              <HiTrash />
            </button>
          </ProductCardHorizontal>
        ))}
    </div>
  );
}

export default CartBox;