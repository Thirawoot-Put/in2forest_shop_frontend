import { useContext } from "react";
import { ProductContext } from "../features/home/contexts/ProductContext";

export default function useProduct() {
    return useContext(ProductContext);
}