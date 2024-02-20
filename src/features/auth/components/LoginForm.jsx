import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useAuth from "../../../hooks/use-auth";
import validateLogin from "../validations/validate-login";
import { toast } from "react-toastify";

function LoginForm() {
  const { openModal, login } = useAuth();

  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const valError = validateLogin(input);
      if (valError) {
        setError(valError);
      }
      await login(input);
    } catch (error) {
      console.log(error.response?.data.message);
      toast.error(error.response?.data.message);
    }
  };

  return (
    <form className="px-8 flex flex-col gap-5" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <Input
        placeholder="example@mail.com"
        title="Email address"
        name="email"
        onChange={handleChange}
        errorMsg={error.email}
      />
      <Input
        type="password"
        placeholder="password"
        title="Password"
        name="password"
        onChange={handleChange}
        errorMsg={error.password}
      />
      <div className="flex gap-6 justify-center py-10">
        <Button color="secondary" width="w-44" onClick={openModal}>
          Register
        </Button>
        <Button color="primary" width="w-44" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
