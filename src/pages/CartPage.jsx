import React from "react";
import CartBox from "../features/cart/components/CartBox";
import OrderSummaryBox from "../features/cart/components/OrderSummaryBox";
import useCart from "../hooks/use-cart";
import { useState } from "react";
import { useEffect } from "react";
import LoadingBar from "../components/LoadingBar";
import useAuth from "../hooks/use-auth";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const { removeProductFromCart, getAllInCart, calculateTotal } = useCart();

  const handleClick = (id) => {
    try {
      setLoading(true);
      removeProductFromCart(id);
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    try {
      getAllInCart();
      calculateTotal();
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingBar />}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex w-[80rem] flex-col gap-4 py-4">
          <h1 className="font-semibold text-2xl">Your cart</h1>
          <div className="flex gap-10">
            <CartBox onClick={handleClick} />
            <OrderSummaryBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
