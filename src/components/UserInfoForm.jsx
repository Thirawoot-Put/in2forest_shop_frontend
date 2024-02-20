import React from "react";
import Input from "./Input";
import Button from "./Button";

function UserInfoForm({
  onSubmit,
  onChange,
  error,
  formName,
  btnName,
  isRegister = false,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold text-center">{formName}</h1>
      <div className="flex flex-col gap-1">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <Input
              title="First name"
              name="firstName"
              onChange={onChange}
              errorMsg={error?.firstName}
            />
          </div>
          <div className="flex flex-col">
            <Input
              title="Last name"
              name="lastName"
              onChange={onChange}
              errorMsg={error?.lastName}
            />
          </div>
        </div>
        <Input
          title="Mobile number"
          name="mobile"
          onChange={onChange}
          errorMsg={error?.mobile}
        />
        {isRegister && (
          <>
            <Input
              title="Email address"
              name="email"
              onChange={onChange}
              errorMsg={error?.email}
            />
            <Input
              title="Password"
              name="password"
              type="password"
              onChange={onChange}
              errorMsg={error?.password}
            />
            <Input
              title="Confirm password"
              name="confirmPassword"
              type="password"
              onChange={onChange}
              errorMsg={error?.confirmPassword}
            />
          </>
        )}
        <div className="w-full pt-6">
          <Button type="submit">{btnName}</Button>
        </div>
      </div>
    </form>
  );
}

export default UserInfoForm;
