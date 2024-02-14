import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import { storeToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [authUser, setAuthUser] = useState(null);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const register = async data => {
        const res = await authApi.register(data);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
    };

    return (
        <AuthContext.Provider
            value={{
                open,
                authUser,
                openModal,
                closeModal,
                register
            }}>
            {children}
        </AuthContext.Provider>
    )
};