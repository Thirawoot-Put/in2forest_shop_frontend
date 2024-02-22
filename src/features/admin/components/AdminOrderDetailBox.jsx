import React from "react";
import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

function AdminOrderDetailBox({ orderItems, payment }) {
  console.log(orderItems);
  return (
    <>
      <div className="flex justify-between w-[45rem] border rounded-xl p-4 gap-10">
        <div className="flex flex-col">
          {orderItems &&
            orderItems.map((item) => (
              <ProductCardHorizontal
                key={item.id}
                data={item.product}
                width="w-[28rem]"
              />
            ))}
        </div>
        <div className="flex flex-col gap-4 w-80">
          <div className="bg-gray-300">
            <img
              src={
                payment?.proofOfPayment ||
                "/src/assets/pic/homepage/default-img.png"
              }
              alt="payment_slip"
            />
          </div>
          <Button text="lg">Payment</Button>
          <Link>
            <Button color="secondary" text="lg">
              Cancel order
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminOrderDetailBox;
