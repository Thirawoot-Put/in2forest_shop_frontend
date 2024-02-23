import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useCart from "../hooks/use-cart";
import useOrder from "../hooks/use-order";
import { useState } from "react";
import * as orderApi from "../api/order";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingBar from "../components/LoadingBar";

function PaymentPage() {
  const { targetOrder, uploadPaySlip } = useOrder();
  const [paySlip, setPaySlip] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    setPaySlip(e.target.files[0]);
  };

  const handleClickSave = async () => {
    try {
      setLoading(true);
      uploadPaySlip(paySlip);
      toast.success("Upload complete");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 pb-52 pt-28">
          <div className="font-semibold text-xl">
            Thank you for your support
          </div>
          <div>
            Please upload payment slip for{" "}
            <span className="font-semibold">{targetOrder.totalPrice} THB</span>
          </div>
          <div className="w-40">
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
          <Link to={"/orders"}>
            <Button width="w-24" onClick={handleClickSave}>
              Save
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
