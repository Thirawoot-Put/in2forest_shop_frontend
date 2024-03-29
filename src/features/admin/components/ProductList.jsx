import React from "react";
import AdminProductCard from "./AdminProductCard";
import useAuth from "../../../hooks/use-auth";

function ProductList() {
  const {
    authUser: { firstName, lastName },
  } = useAuth();

  return (
    <>
      <h1 className="font-semibold text-2xl pt-4">
        Admin {firstName ? firstName : ""} {lastName ? lastName : ""}
      </h1>
      <div className="overflow-scroll">
        <AdminProductCard />
      </div>
    </>
  );
}

export default ProductList;
