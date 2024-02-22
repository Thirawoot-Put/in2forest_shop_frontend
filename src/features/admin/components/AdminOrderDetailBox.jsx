import React from "react";
import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/use-admin";

function AdminOrderDetailBox({ orderItems, payment, targetOrder }) {
  const { approveOrder, deleteOrder, confirmShipping } = useAdmin();

  const handleApprove = () => {
    approveOrder(targetOrder.id);
  };

  const handleDeleteOrder = () => {
    deleteOrder(targetOrder.id);
  };

  const handleShippedOrder = () => {
    confirmShipping(targetOrder.id);
  };

  console.log(targetOrder);

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
          {targetOrder?.status === "PENDING" ? (
            <>
              <Link to={"/admin/orders"}>
                <Button text="lg" onClick={handleApprove}>
                  Approve order
                </Button>
              </Link>
              <Link to={"/admin/orders"}>
                <Button color="secondary" text="lg" onClick={handleDeleteOrder}>
                  Delete order
                </Button>
              </Link>
            </>
          ) : targetOrder?.status === "SHIPPED" ? (
            ""
          ) : (
            <Link to={"/admin/orders"}>
              <Button px="px-6" text="lg" onClick={handleShippedOrder}>
                Confirm Shipping
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminOrderDetailBox;
