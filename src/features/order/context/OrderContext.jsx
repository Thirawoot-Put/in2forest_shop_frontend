import { useState } from "react";
import { createContext } from "react";
import * as orderApi from "../../../api/order";
import { useEffect } from "react";
import useProduct from "../../../hooks/use-product";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [targetOrder, setTargetOrder] = useState(null);
  const [allUserOrders, setAllUserOrders] = useState([]);
  const [userOrder, setUserOrder] = useState(null);
  const [itemsInOrder, setItemsInOrder] = useState([]);
  const [paySlip, setPaySlip] = useState("");

  const { setAllTypesWithProducts } = useProduct();

  const getAllOrders = async () => {
    const {
      data: { userOrders },
    } = await orderApi.getAllUserOrders();
    setAllUserOrders(userOrders);
  };

  const getOrderDetail = async (id) => {
    const {
      data: { order },
    } = await orderApi.getUserOrderDetail(id);
    setUserOrder(order);
    setItemsInOrder(order.orderItems);
    setPaySlip(order.payment.proofOfPayment);
  };

  const cancelOrder = async (id) => {
    const {
      data: { deleteOrder, allProducts },
    } = await orderApi.deleteOrderByUser(id);
    const arr = allUserOrders.filter((el) => el.id !== +id);
    setAllTypesWithProducts(allProducts);
    setAllUserOrders(arr);
  };

  const uploadPaySlip = async (paySlip) => {
    const formData = new FormData();
    formData.append("proofOfPayment", paySlip);
    const {
      data: { paymentUpdate, userOrders },
    } = await orderApi.uploadPaySlip(targetOrder.id, formData);
    setAllUserOrders(userOrders);
  };

  return (
    <OrderContext.Provider
      value={{
        targetOrder,
        setTargetOrder,
        getAllOrders,
        allUserOrders,
        getOrderDetail,
        userOrder,
        itemsInOrder,
        paySlip,
        cancelOrder,
        uploadPaySlip,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
