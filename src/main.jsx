import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./features/auth/context/AuthContext";
import AdminContextProvider from "./features/admin/contexts/AdminContext";
import ProductContextProvider from "./features/home/contexts/ProductContext";
import CartContextProvider from "./features/cart/contexts/CartContext";
import UserContextProvider from "./features/user/contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ProductContextProvider>
      <UserContextProvider>
        <AdminContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AdminContextProvider>
      </UserContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
