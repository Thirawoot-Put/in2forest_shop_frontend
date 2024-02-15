import React from 'react'

function LogoListImg({ src, alt }) {
    return (
        <div className='w-full flex justify-center'>
            <img className='w-24' src={src} alt={alt} />
        </div>
    )
}

export default LogoListImg