import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import { storeToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const register = async data => {
        const res = await authApi.register(data);
        storeToken(res.data.accessToken);
    }

    return (
        <AuthContext.Provider
            value={{
                open,
                openModal,
                closeModal,
                register
            }}>
            {children}
        </AuthContext.Provider>
    )
};