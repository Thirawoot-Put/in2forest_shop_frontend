import React from "react";
import OrderCard from "../components/OrderCard";
import { useEffect } from "react";
import useOrder from "../hooks/use-order";
import { useState } from "react";
import LoadingBar from "../components/LoadingBar";

function AdminOrdersPage() {
  const { allUserOrders, getAllOrders } = useOrder();
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
      {loading ? (
        <LoadingBar />
      ) : (
        <div className=" flex justify-center items-center pb-52 pt-24">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">Your orders</div>
            <div className="border rounded-lg px-6">
              {allUserOrders &&
                allUserOrders.map((order) => (
                  <OrderCard key={order.id} data={order} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminOrdersPage;
