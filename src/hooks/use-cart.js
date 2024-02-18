import { useContext } from "react";
import { CartContext } from "../features/cart/contexts/CartContext";

export default function useCart() {
  return useContext(CartContext);
}
