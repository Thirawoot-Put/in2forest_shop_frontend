import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticate";
import ProtectRoute from "../features/auth/components/ProtectRoute";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import UserContaner from "../layouts/UserContaner";
import OrdersPage from "../pages/OrdersPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import PaymentPage from "../pages/PaymentPage";
import ProfileInfoPage from "../pages/ProfileInfoPage";

const router = createBrowserRouter([
    {
        path: '/login',
        element:
            (
                <RedirectAuthenticated>
                    <LoginPage />
                </RedirectAuthenticated>
            )
    },
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/product/:productId',
        element: <ProductDetailPage />
    },
    {
        path: '/',
        element: (
            <ProtectRoute>
                <UserContaner />
            </ProtectRoute>
        ),
        children: [
            {
                path: 'cart/:userId',
                element: <CartPage />
            },
            {
                path: 'orders/:userId',
                element: <OrdersPage />
            },
            {
                path: 'order/:orderId',
                element: <OrderDetailPage />
            },
            {
                path: 'payment',
                element: <PaymentPage />
            },
            {
                path: 'profile/:userId',
                element: <ProfileInfoPage />
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}