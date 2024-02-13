import { useState } from "react";
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import useAuth from "../../../hooks/use-auth"
import validateLogin from "../validations/validate-login";

function LoginForm() {
    const { openModal } = useAuth();

    const [input, setInput] = useState({ email: '', password: '' });
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError({})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const valError = validateLogin(input);
        if (valError) {
            setError(valError);
        }
    }

    return (
        <form className="px-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <Input placeholder="jd@gmail.com" title="Email address" name="email" onChange={handleChange} errorMsg={error.email} />
            <Input type="password" placeholder="password" title="Password" name="password" onChange={handleChange} errorMsg={error.password} />
            <div className="flex gap-6 justify-center py-10">
                <Button color="secondary" width="full" onClick={openModal}>Register</Button>
                <Button color="primary" width="full" type="submit">Login</Button>
            </div>
        </form>
    )
}

export default LoginForm