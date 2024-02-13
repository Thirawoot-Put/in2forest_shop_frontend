import React from 'react'

function Input({ type = "text", placeholder, title }) {
    return (
        <>
            <h2 className="text-xl">{title}</h2>
            <input
                className="rounded-full bg-[#F2F0F1] border border-black w-[30rem] focus:outline-none px-4 py-1"
                type={type}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input