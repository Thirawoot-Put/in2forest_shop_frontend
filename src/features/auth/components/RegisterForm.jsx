import Button from "../../../components/Button"
import Input from "../../../components/Input"


function RegisterForm({ closeModal }) {
    return (
        <form>
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <div className="flex flex-col gap-2">
                <Input title="Email address" />
                <Input title="Password" />
                <Input title="Confirm password" />
                <Input title="First name" />
                <Input title="Last name" />
                <Input title="Mobile number" />
                <div className="w-full pt-6">
                    <Button color="primary" width="full" onClick={closeModal}>Submit</Button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm