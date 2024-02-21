import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useCart from "../hooks/use-cart";
import useOrder from "../hooks/use-order";
import { useState } from "react";
import * as orderApi from "../api/order";

function PaymentPage() {
  const { targetOrder } = useOrder();
  const [paySlip, setPaySlip] = useState(null);

  const handleChangeInput = (e) => {
    setPaySlip(e.target.files[0]);
  };
  console.log(paySlip);
  console.log(targetOrder);

  const handleClickSave = async () => {
    const formData = new FormData();
    formData.append("proofOfPayment", paySlip);
    await orderApi.uploadPaySlip(targetOrder.id, formData);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <div className="font-semibold text-2xl">Thank you for your support</div>
      <div>
        Please upload payment slip for{" "}
        <span className="font-semibold">
          {targetOrder?.totalPrice || 999} THB
        </span>
      </div>
      <div className="w-64">
        <img
          src="/src/assets/pic/payment\qr_prompt-pay.jpg"
          alt="qr-prompt-pay"
        />
      </div>
      <Input
        width="w-60"
        type="file"
        onChange={handleChangeInput}
        name="paySlip"
      />
      <Button width="w-24" onClick={handleClickSave}>
        Save
      </Button>
    </div>
  );
}

export default PaymentPage;
