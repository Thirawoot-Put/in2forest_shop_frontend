import React from "react";

function OrderCard({ data }) {
  return (
    <div className=" flex justify-between items-center gap-20 py-2 border-b">
      <div>
        <h1>#{data.id}</h1>
        <h1>THB {data.totalPrice}</h1>
      </div>
      <div>Order at: {data.createdAt}</div>
      <div>Status: {data.status}</div>
      <div className="flex items-center gap-1">
        <div className="bg-gray-300 w-16">
          <img
            src={
              data.payment.proofOfPayment ||
              "/src/assets/pic/homepage/default-img.png"
            }
            alt="payment-slip"
          />
        </div>
        <button className="border px-2 rounded-lg bg-gray-300">detail</button>
      </div>
    </div>
  );
}

export default OrderCard;
