import React from "react";
import ProductList from "../features/admin/components/ProductList";
import useAdmin from "../hooks/use-admin";
import { useEffect } from "react";

function AdminEditProductPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center pb-52 pt-20">
      <ProductList />
    </div>
  );
}

export default AdminEditProductPage;
