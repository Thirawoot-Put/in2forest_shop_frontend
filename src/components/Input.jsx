import React from 'react'

function Input({ type = "text", placeholder, title, name, onChange, errorMsg, width = "w-30", value }) {
    const className = `rounded-full bg-[#F2F0F1] border ${errorMsg ? 'border-red-500' : 'border-black'} ${width} focus:outline-none px-4 py-1`
    return (
        <>
            <h2 className="text-xl">{title}</h2>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />
            {errorMsg && (
                <small className='text-red-500'>{errorMsg}</small>
            )}
        </>
    )
}

export default Input