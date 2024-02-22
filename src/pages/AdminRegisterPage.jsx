import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import validateAdminRegister from "../features/auth/validations/validate-admin-register";
import * as adminApi from "../api/admin";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminRegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobile: "",
    adminCode: "",
  });

  const adminRegister = async (data) => {
    const res = await adminApi.adminRegister(data);
    console.log(res);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const valError = validateAdminRegister(input);
      console.log(valError);
      if (valError) {
        return setError(valError);
      }
      await adminRegister(input);
      toast.success("Admin register success");
      navigate("/login");
    } catch (error) {
      if (error.response?.data.message === "admin_code_not_correct") {
        return setError({ adminCode: "Admin code not correct" });
      }
      if (error.response?.data.message === "email_already_use") {
        return setError({ email: "Email address already in use" });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">Register Admin</h1>
        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Input
                title="First name"
                name="firstName"
                onChange={handleChange}
                errorMsg={error?.firstName}
              />
            </div>
            <div className="flex flex-col">
              <Input
                title="Last name"
                name="lastName"
                onChange={handleChange}
                errorMsg={error?.lastName}
              />
            </div>
          </div>
          <Input
            title="Mobile number"
            name="mobile"
            onChange={handleChange}
            errorMsg={error?.mobile}
          />
          <>
            <Input
              title="Email address"
              name="email"
              onChange={handleChange}
              errorMsg={error?.email}
            />
            <Input
              title="Password"
              name="password"
              type="password"
              onChange={handleChange}
              errorMsg={error?.password}
            />
            <Input
              title="Confirm password"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              errorMsg={error?.confirmPassword}
            />
            <Input
              title="Admin code"
              name="adminCode"
              type="password"
              onChange={handleChange}
              errorMsg={error?.adminCode}
            />
          </>
          <div className="w-full pt-6">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminRegisterPage;
