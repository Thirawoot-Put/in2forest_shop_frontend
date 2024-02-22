import React from "react";
import Header from "./Header";
import Footter from "./Footter";
import { Outlet } from "react-router-dom";

function AdminContainer() {
  return (
    <>
      <Header />
      <Outlet />
      <Footter />
    </>
  );
}

export default AdminContainer;
