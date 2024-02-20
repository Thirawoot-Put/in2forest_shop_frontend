import { useContext } from "react";
import { UserContext } from "../features/user/contexts/UserContext";

export default function useUser() {
  return useContext(UserContext);
}
