import React from "react";
import AdminOrderDetailBox from "../features/admin/components/AdminOrderDetailBox";
import { useEffect } from "react";
import useAdmin from "../hooks/use-admin";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LoadingBar from "../components/LoadingBar";

function AdminOrderDetailPage() {
  const { targetOrder, getOrderById } = useAdmin();
  const { orderId } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getOrderById(orderId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="flex justify-center items-center py-8">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-lg font-semibold">#{targetOrder?.id}</h1>
              <p className="text-sm text-gray-500">
                order at: {targetOrder?.createdAt}
              </p>
              <h1 className="text-xl font-semibold">
                THB {targetOrder?.totalPrice}
              </h1>
            </div>
            <AdminOrderDetailBox
              orderItems={targetOrder.orderItems}
              payment={targetOrder.payment}
              targetOrder={targetOrder}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminOrderDetailPage;
