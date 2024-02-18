import { useContext } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}
