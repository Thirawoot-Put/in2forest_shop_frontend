import { useState } from "react";
import { createContext } from "react";
import * as orderApi from "../../../api/order";
import { useEffect } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [targetOrder, setTargetOrder] = useState(null);
  const [allUserOrders, setAllUserOrders] = useState(null);
  const [userOrder, setUserOrder] = useState(null);
  const [itemsInOrder, setItemsInOrder] = useState([]);
  const [paySlip, setPaySlip] = useState("");

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
    await orderApi.deleteOrderByUser(id);
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
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
