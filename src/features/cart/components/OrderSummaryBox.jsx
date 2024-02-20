import React from "react";
import Button from "../../../components/Button";
import useCart from "../../../hooks/use-cart";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSummaryBox() {
  const navigate = useNavigate();
  const { subTotal } = useCart();

  const handleClickCheckOut = (e) => {
    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center h-96 w-5/12 border p-4 border-black rounded-2xl justify-between">
      <h1 className="font-semibold text-xl">Order Summary</h1>
      <div className="w-full flex flex-col gap-4 text-lg">
        <div className="flex justify-between">
          <p className="text-gray-400">subTotal</p>
          <p className="font-semibold">THB {subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Delivery fee</p>
          <p className="font-semibold">free</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-semibold text-2xl">THB {subTotal}</p>
        </div>
      </div>
      <div className="text-center w-full p-2 bg-[#F2F0F1] border rounded-xl">
        Address
      </div>
      <Button width="full" onClick={handleClickCheckOut}>
        Check out
      </Button>
    </div>
  );
}

export default OrderSummaryBox;
