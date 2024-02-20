import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import * as userApi from "../../../api/user";
import useAuth from "../../../hooks/use-auth";
import { useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [input, setInput] = useState({});
  const [allAddresses, setAllAddresses] = useState([]);

  const { authUser } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitEditProfile = async () => {
    await authApi.updateUserInfo(authUser.id, input);
  };

  const getAllReceiveAddress = async (id) => {
    const {
      data: { addresses },
    } = await userApi.getAllAddresses(id);
    setAllAddresses(addresses);
  };

  useEffect(() => {}, [authUser]);

  return (
    <UserContext.Provider
      value={{
        handleChangeInput,
        submitEditProfile,
        allAddresses,
        getAllReceiveAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
