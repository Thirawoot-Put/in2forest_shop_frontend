import React from "react";
import OrderCard from "../components/OrderCard";
import useAdmin from "../hooks/use-admin";
import { useEffect } from "react";
import LoadingBar from "../components/LoadingBar";
import { useState } from "react";
import AdminOrderCard from "../features/admin/components/AdminOrderCard";

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

  console.log(allOrders);

  return (
    <>
      {loading && <LoadingBar />}
      <div className=" flex justify-center items-center pb-52 pt-24">
        <div className="flex flex-col gap-2">
          <div>Admin, All orders</div>
          <div className="border rounded-lg px-6 h-[32rem] overflow-scroll">
            {allOrders.length &&
              allOrders.map((order) => (
                <AdminOrderCard key={order.id} data={order} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminOrdersPage;
