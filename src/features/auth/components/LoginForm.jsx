import Button from "../../../components/Button"
import Input from "../../../components/Input"


function LoginForm({ openModal }) {
    return (
        <form className="px-8 flex flex-col gap-5">
            <Input placeholder="jd@gmail.com" title="Email address" />
            <Input type="password" placeholder="password" title="Password" />
            <div className="flex gap-6 justify-center py-10">
                <Button color="secondary" width="full" onClick={openModal}>Register</Button>
                <Button color="primary" width="full">Login</Button>
            </div>
        </form>
    )
}

export default LoginForm