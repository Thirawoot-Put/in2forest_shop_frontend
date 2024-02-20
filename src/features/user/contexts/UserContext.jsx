import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import useAuth from "../../../hooks/use-auth";
import { useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [input, setInput] = useState({});

  const { authUser } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitEditProfile = async () => {
    await authApi.updateUserInfo(authUser.id, input);
  };

  useEffect(() => {}, [authUser]);

  return (
    <UserContext.Provider value={{ handleChangeInput, submitEditProfile }}>
      {children}
    </UserContext.Provider>
  );
}
