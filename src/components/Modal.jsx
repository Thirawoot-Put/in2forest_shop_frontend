import React from 'react'
import RegisterForm from '../features/auth/components/RegisterForm'

function Modal({ children }) {
    return (
        <>
            <div className="fixed bg-white inset-0 opacity-70"></div>
            <div className="fixed inset-0">
                <div className="flex justify-center items-center min-h-full">
                    <div className="bg-white px-6 py-8 border rounded-lg shadow-[5px_5px_8px_rgb(0,0,0,0.2)]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal