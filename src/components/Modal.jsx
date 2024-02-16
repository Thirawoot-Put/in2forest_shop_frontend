import React from 'react'

function Modal({ children, onClose }) {
    return (
        <>
            <div className="fixed bg-white inset-0 opacity-70"></div>
            <div className="fixed inset-0">
                <div className="flex justify-center items-center min-h-full">
                    <div className="bg-white px-6 py-8 border relative rounded-lg shadow-[5px_5px_8px_rgb(0,0,0,0.2)]">
                        <button className='absolute right-2 top-0' onClick={onClose}>&#10005;</button>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal