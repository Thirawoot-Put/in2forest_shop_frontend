import { useContext } from "react";
import { AdminContext } from "../features/admin/contexts/AdminContext";

export default function useAdmin() {
    return useContext(AdminContext);
}