import React from "react";
import CartBox from "../features/cart/components/CartBox";
import OrderSummaryBox from "../features/cart/components/OrderSummaryBox";
import useCart from "../hooks/use-cart";
import { useState } from "react";
import { useEffect } from "react";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const { removeProductFromCart, getAllInCart, calculateTotal } = useCart();

  useEffect(() => {
    try {
      getAllInCart();
      calculateTotal();
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const handleClick = (id) => {
    try {
      setLoading(true);
      removeProductFromCart(id);
    } catch (err) {
      console.error();
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex w-[80rem] flex-col gap-4 py-4">
        <h1 className="font-semibold text-2xl">Your cart</h1>
        <div className="flex gap-10">
          <CartBox onClick={handleClick} />
          <OrderSummaryBox />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
