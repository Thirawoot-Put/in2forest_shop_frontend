import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticate";
import ProtectRoute from "../features/auth/components/ProtectRoute";

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
        element:
            (
                <ProtectRoute>
                    <HomePage />
                </ProtectRoute>
            )
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}