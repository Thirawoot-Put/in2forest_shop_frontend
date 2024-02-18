import React from "react";
import CartBox from "../features/cart/components/CartBox";
import OrderSummaryBox from "../features/cart/components/OrderSummaryBox";

function CartPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex w-[80rem] flex-col gap-4 py-4">
        <h1 className="font-semibold text-2xl">Your cart</h1>
        <div className="flex gap-10">
          <CartBox />
          <OrderSummaryBox />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
