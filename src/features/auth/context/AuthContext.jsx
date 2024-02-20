import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import {
  getToken,
  removeToken,
  storeToken,
} from "../../../utils/local-storage";
import { useEffect } from "react";
import validateRegister from "../validations/validate-register";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const [error, setError] = useState({});

  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .getMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setFirstLoading(false));
    } else {
      setFirstLoading(false);
    }
  }, []);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const register = async (data) => {
    const res = await authApi.register(data);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (data) => {
    const res = await authApi.login(data);
    setAuthUser(res.data.user);
    storeToken(res.data.token);
  };

  const logout = (e) => {
    setAuthUser(null);
    removeToken();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const valError = validateRegister(input);
      if (valError) {
        return setError(valError);
      }
      await register(input);
      closeModal();
    } catch (error) {
      if (error.response?.data.message === "email_already_use") {
        return setError({ email: "Email address already in use" });
      }
    }
  };

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
        logout,
        handleChange,
        handleSubmit,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
