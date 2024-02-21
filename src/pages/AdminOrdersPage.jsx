import React from "react";
import OrderCard from "../components/OrderCard";
import useAdmin from "../hooks/use-admin";
import { useEffect } from "react";
import LoadingBar from "../components/LoadingBar";
import { useState } from "react";

function AdminOrdersPage() {
  const { allOrders, getAllOrders } = useAdmin();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getAllOrders();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <LoadingBar />}
      <div className=" flex justify-center items-center py-4">
        <div className="flex flex-col gap-2">
          <div>Admin, All orders</div>
          <div className="border rounded-lg px-6">
            {allOrders.length &&
              allOrders.map((order) => (
                <OrderCard key={order.id} data={order} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminOrdersPage;
