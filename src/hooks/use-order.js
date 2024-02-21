import { useContext } from "react";
import { OrderContext } from "../features/order/context/OrderContext";

export default function useOrder() {
  return useContext(OrderContext);
}
