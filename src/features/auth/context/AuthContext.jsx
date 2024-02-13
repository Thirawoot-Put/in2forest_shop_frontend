import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);


    return <AuthContext.Provider value={{ open, openModal, closeModal }}>{children}</AuthContext.Provider>
}