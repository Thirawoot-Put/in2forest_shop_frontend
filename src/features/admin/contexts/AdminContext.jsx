import { useState } from "react";
import { createContext } from "react";
import * as adminApi from "../../../api/admin";
import * as productApi from "../../../api/product";
import * as orderApi from "../../../api/order";
import appendDataWithImage from "../../../utils/appendDataWithImage";
import { useEffect } from "react";
import useProduct from "../../../hooks/use-product";
import { toast } from "react-toastify";

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
  const [allProductTypes, setAllProductTypes] = useState(null);
  const [entireProduct, setEntireProduct] = useState([]);

  const [allOrders, setAllOrders] = useState([]);
  const [targetOrder, setTargetOrder] = useState({});

  const { setAllTypesWithProducts } = useProduct();

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

  const addProduct = async (newProduct) => {
    const formData = new FormData();
    appendDataWithImage(formData, newProduct);
    const {
      data: { allProducts },
    } = await adminApi.addProduct(formData);
    setAllTypesWithProducts(allProducts);
    toast.success("Add new product success");
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
        allProductTypes,
        entireProduct,
        getAllTypes,
        addProduct,
        getAllProduct,
        getAllOrders,
        allOrders,
        getOrderById,
        targetOrder,
        approveOrder,
        deleteOrder,
        confirmShipping,
        setEntireProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
