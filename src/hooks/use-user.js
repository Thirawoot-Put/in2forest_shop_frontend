import { useContext } from "react";
import { UserContext } from "../features/home/contexts/userContext";

export default function useUser() {
    return useContext(UserContext);
}