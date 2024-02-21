import React from "react";
import OrderCard from "../components/OrderCard";

function AdminOrdersPage() {
  return (
    <div className=" flex justify-center items-center py-4">
      <div className="flex flex-col gap-2">
        <div>Your orders</div>
        <div className="border rounded-lg px-6">
          <OrderCard />
        </div>
      </div>
    </div>
  );
}

export default AdminOrdersPage;
