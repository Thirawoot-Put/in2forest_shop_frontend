import { useState } from "react";
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import useAuth from "../../../hooks/use-auth"
import validateRegister from "../validations/validate-register";


function RegisterForm() {
    const { closeModal, register } = useAuth();

    const [input, setInput] = useState(
        {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            mobile: ''
        }
    );
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError({});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const valError = validateRegister(input);
        if (valError) {
            setError(valError);
        }
        await register(input);
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <div className="flex flex-col gap-1">
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <Input title="First name" name="firstName" onChange={handleChange} errorMsg={error.firstName} />
                    </div>
                    <div className="flex flex-col">
                        <Input title="Last name" name="lastName" onChange={handleChange} errorMsg={error.lastName} />
                    </div>
                </div>
                <Input title="Mobile number" name="mobile" onChange={handleChange} errorMsg={error.mobile} />
                <Input title="Email address" name="email" onChange={handleChange} errorMsg={error.email} />
                <Input title="Password" name="password" type="password" onChange={handleChange} errorMsg={error.password} />
                <Input title="Confirm password" name="confirmPassword" type="password" onChange={handleChange} errorMsg={error.confirmPassword} />
                <div className="w-full pt-6">
                    <Button color="primary" width="full" type="submit">Submit</Button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm