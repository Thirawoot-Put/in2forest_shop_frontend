import { useState } from "react";
import { createContext } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [targetOrder, setTargetOrder] = useState(null);
  return (
    <OrderContext.Provider value={{ targetOrder, setTargetOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
