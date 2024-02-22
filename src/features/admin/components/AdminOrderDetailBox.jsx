import React from "react";
import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import Button from "../../../components/Button";

function AdminOrderDetailBox() {
  return (
    <>
      {/* {loading && <LoadingBar />} */}
      <div className="flex justify-between w-[45rem] border rounded-xl p-4 gap-10">
        <div className="flex flex-col">
          <ProductCardHorizontal />
        </div>
        <div className="flex flex-col gap-4 w-80">
          <div className="bg-gray-300">
            <img
              src={"/src/assets/pic/homepage/default-img.png"}
              alt="payment_slip"
            />
          </div>
          <Button text="lg">Payment</Button>
          <Button color="secondary" text="lg">
            Cancel order
          </Button>
        </div>
      </div>
    </>
  );
}

export default AdminOrderDetailBox;
