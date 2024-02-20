import useAuth from "../../../hooks/use-auth";
import UserInfoForm from "../../../components/UserInfoForm";

function RegisterForm() {
  const { handleSubmit, handleChange, error } = useAuth();

  return (
    <UserInfoForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      error={error}
      formName="Register"
      btnName="Submit"
      isRegister={true}
    />
  );
}

export default RegisterForm;
