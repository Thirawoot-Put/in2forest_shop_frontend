import { useState } from "react";
import { createContext } from "react";
import * as adminApi from "../../../api/admin";
import * as productApi from "../../../api/product";
import * as orderApi from "../../../api/order";
import appendDataWithImage from "../../../utils/appendDataWithImage";
import { useEffect } from "react";

export const AdminContext = createContext();

const initial = {
  productName: "",
  size: "",
  productDetail: "",
  defect: "",
  price: "",
  productTypeId: "",
  mainImage: null,
};

export default function AdminContextProvider({ children }) {
  const [product, setProduct] = useState(initial);
  const [allProductTypes, setAllProductTypes] = useState(null);
  const [entireProduct, setEntireProduct] = useState([]);

  const [allOrders, setAllOrders] = useState([]);
  const [targetOrder, setTargetOrder] = useState({});

  const getAllTypes = async () => {
    const {
      data: { allTypes },
    } = await productApi.getAllProductTypes();
    setAllProductTypes(allTypes);
  };

  const getAllProduct = async () => {
    const {
      data: { allProduct },
    } = await productApi.getAllProduct();
    setEntireProduct(allProduct);
  };

  const handleChange = (e) => {
    if (e.target.name === "mainImage") {
      setProduct({ ...product, mainImage: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const addProduct = async () => {
    const formData = new FormData();
    appendDataWithImage(formData, product);
    await adminApi.addProduct(formData);
    setProduct(initial);
  };

  const getAllOrders = async () => {
    const {
      data: { orders },
    } = await orderApi.adminGetAllOrders();
    setAllOrders(orders);
  };

  const getOrderById = async (id) => {
    const {
      data: { order },
    } = await orderApi.adminGetOrderById(id);
    setTargetOrder(order);
  };

  const approveOrder = async (id) => {
    const data = { status: "APPROVED" };
    const result = await orderApi.adminUpdateOrderStatus(id, data);
    console.log(result);
    const obj = { ...targetOrder, status: "APPROVED" };
    const arr = allOrders.filter((el) => el.id !== +id);
    arr.unshift(obj);
    setAllOrders(arr);
  };

  const deleteOrder = async (id) => {
    const result = await orderApi.adminDeleteOrder(id);
    const arr = allOrders.filter((el) => el.id !== +id);
    setAllOrders(arr);
  };

  const confirmShipping = async (id) => {
    const data = { status: "SHIPPED" };
    const result = await orderApi.adminUpdateOrderStatus(id, data);
    console.log(result);
    const obj = { ...targetOrder, status: "SHIPPED" };
    const arr = allOrders.filter((el) => el.id !== +id);
    arr.unshift(obj);
    setAllOrders(arr);
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        product,
        allProductTypes,
        entireProduct,
        getAllTypes,
        handleChange,
        addProduct,
        getAllProduct,
        getAllOrders,
        allOrders,
        getOrderById,
        targetOrder,
        approveOrder,
        deleteOrder,
        confirmShipping,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
