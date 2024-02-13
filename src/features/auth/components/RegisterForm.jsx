import { useState } from "react";
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import useAuth from "../../../hooks/use-auth"


function RegisterForm() {
    const { closeModal } = useAuth();

    const [input, setInput] = useState(
        {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            mobileNumber: ''
        }
    );

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <div className="flex flex-col gap-2">
                <Input title="Email address" name="email" onChange={handleChange} />
                <Input title="Password" name="password" onChange={handleChange} />
                <Input title="Confirm password" name="confirmPassword" onChange={handleChange} />
                <Input title="First name" name="firstName" onChange={handleChange} />
                <Input title="Last name" name="lastName" onChange={handleChange} />
                <Input title="Mobile number" name="mobileNumber" onChange={handleChange} />
                <div className="w-full pt-6">
                    <Button color="primary" width="full" onClick={closeModal}>Submit</Button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm