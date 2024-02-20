import React from "react";
import Button from "../components/Button";

function PaymentPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <div className="font-semibold text-2xl">Thank you for your support</div>
      <div>THB</div>
      <div className="w-64">
        <img src="/src/assets/qr_prompt-pay.jpg" alt="qr-prompt-pay" />
      </div>
      <Button>upload slip button</Button>
    </div>
  );
}

export default PaymentPage;
