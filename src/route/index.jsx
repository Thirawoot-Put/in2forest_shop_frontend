import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticate";
import ProtectRoute from "../features/auth/components/ProtectRoute";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import UserContainer from "../layouts/UserContainer";
import OrdersPage from "../pages/OrdersPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import PaymentPage from "../pages/PaymentPage";
import ProfileInfoPage from "../pages/ProfileInfoPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AdminOrdersPage from "../pages/AdminOrdersPage";
import AdminAddProductPage from "../pages/AdminAddProductPage";
import AdminEditProductPage from "../pages/AdminEditProductPage";
import AdminOrderDetailPage from "../pages/AdminOrderDetailPage";
import AdminRegisterPage from "../pages/AdminRegisterPage";
import ProtectAdminRoute from "../features/auth/components/ProtectAdminRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectAuthenticated>
        <LoginPage />
      </RedirectAuthenticated>
    ),
  },
  {
    path: "admin/register",
    element: (
      <RedirectAuthenticated>
        <AdminRegisterPage />
      </RedirectAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <ProductDetailPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <UserContainer />
      </ProtectRoute>
    ),
    children: [
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "orders/:orderId",
        element: <OrderDetailPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "profile",
        element: <ProfileInfoPage />,
      },
      {
        path: "admin/orders",
        element: <AdminOrdersPage />,
      },
      {
        path: "admin/orders/:orderId",
        element: <AdminOrderDetailPage />,
      },
      {
        path: "admin/product",
        element: <AdminAddProductPage />,
      },
      {
        path: "admin",
        element: (
          <ProtectAdminRoute>
            <AdminEditProductPage />
          </ProtectAdminRoute>
        ),
      },
      {
        path: "product/:product",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
