import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useCart from "../hooks/use-cart";

function PaymentPage() {
  const { subTotal } = useCart();
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <div className="font-semibold text-2xl">Thank you for your support</div>
      <div>
        Please upload payment slip for{" "}
        <span className="font-semibold">{subTotal} THB</span>
      </div>
      <div className="w-64">
        <img src="/src/assets/qr_prompt-pay.jpg" alt="qr-prompt-pay" />
      </div>
      <Input width="w-60" type="file" />
      <Button width="w-72">upload slip button</Button>
    </div>
  );
}

export default PaymentPage;
