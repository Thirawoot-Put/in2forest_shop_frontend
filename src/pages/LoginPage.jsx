import React from 'react'
import LoginForm from '../features/auth/components/LoginForm';
import Modal from '../components/Modal';
import RegisterForm from '../features/auth/components/RegisterForm';
import { useState } from 'react';
import useAuth from '../hooks/use-auth';

function LoginPage() {
    const { open, closeModal } = useAuth();

    return (
        <>
            <div className="bg-[#f5f5f5] w-screen h-screen flex">
                <div className="flex overflow-hidden">
                    <img className="object-cover object-center" src="./src/assets/login-img.png" alt="img" />
                </div>
                <div className="flex flex-col flex-1 w-full justify-center items-center">
                    <LoginForm />
                    <img className='w-52' src="./src/assets/circle-logo.png" alt="" />
                </div>
                {open &&
                    <Modal onClose={closeModal}>
                        <RegisterForm />
                    </Modal>}
            </div>
        </>
    )
}

export default LoginPage