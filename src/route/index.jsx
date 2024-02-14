import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectAuthenticated from "../features/auth/components/RedirectAuthenticate";

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
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}