import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import { getToken, removeToken, storeToken } from "../../../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [authUser, setAuthUser] = useState(null);

    const [firstLoading, setFirstLoading] = useState(true);

    useEffect(() => {
        if (getToken()) {
            authApi.getMe()
                .then(res => {
                    setAuthUser(res.data.user);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => setFirstLoading(false));
        } else {
            setFirstLoading(false);
        }
    }, []);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const register = async data => {
        const res = await authApi.register(data);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
    };

    const login = async data => {
        const res = await authApi.login(data);
        setAuthUser(res.data.user);
        storeToken(res.data.token);
    }

    const logout = e => {
        setAuthUser(null)
        removeToken()
    }

    return (
        <AuthContext.Provider
            value={{
                firstLoading,
                open,
                authUser,
                openModal,
                closeModal,
                register,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
};