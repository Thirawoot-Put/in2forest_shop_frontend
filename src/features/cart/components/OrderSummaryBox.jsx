import React from "react";
import Button from "../../../components/Button";

function OrderSummaryBox() {
  return (
    <div className="flex flex-col items-center h-96 w-5/12 border p-4 border-black rounded-2xl justify-between">
      <h1 className="font-semibold text-xl">Order Summary</h1>
      <div className="w-full flex flex-col gap-4 text-lg">
        <div className="flex justify-between">
          <p className="text-gray-400">Subtotal</p>
          <p className="font-semibold">THB 500</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Delivery fee</p>
          <p className="font-semibold">THB 50</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-semibold text-2xl">THB 550</p>
        </div>
      </div>
      <div className="text-center w-full p-2 bg-[#F2F0F1] border rounded-xl">
        Address
      </div>
      <Button width="full">Add</Button>
    </div>
  );
}

export default OrderSummaryBox;
