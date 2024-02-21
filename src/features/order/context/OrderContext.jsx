import { useState } from "react";
import { createContext } from "react";
import * as orderApi from "../../../api/order";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [targetOrder, setTargetOrder] = useState(null);
  const [allUserOrders, setAllUserOrders] = useState(null);

  const getAllOrders = async () => {
    const {
      data: { userOrders },
    } = await orderApi.getAllUserOrders();
    setAllUserOrders(userOrders);
  };

  return (
    <OrderContext.Provider
      value={{ targetOrder, setTargetOrder, getAllOrders, allUserOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
}
