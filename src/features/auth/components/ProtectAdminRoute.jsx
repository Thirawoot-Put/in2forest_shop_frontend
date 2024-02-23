import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

function ProtectAdminRoute({ children }) {
  const { authUser } = useAuth();
  console.log(authUser.role);
  return (authUser.role = "ADMIN" ? children : <Navigate to="/" />);
}

export default ProtectAdminRoute;
