import React from 'react'
import LoginForm from '../features/auth/components/LoginForm';
import Modal from '../components/Modal';
import RegisterForm from '../features/auth/components/RegisterForm';
import { useState } from 'react';

function LoginPage() {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <div className="bg-[#f5f5f5] w-screen h-screen flex">
                <div className="flex overflow-hidden">
                    <img className="object-cover object-center" src="./src/assets/login-img.png" alt="img" />
                </div>
                <div className="flex flex-1 w-full justify-center items-center">
                    <LoginForm openModal={openModal} />
                </div>
                {open &&
                    <Modal>
                        <RegisterForm closeModal={closeModal} />
                    </Modal>}
            </div>
        </>
    )
}

export default LoginPage