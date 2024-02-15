import React from 'react'
import LogoListImg from './LogoListImg'

function LogoList() {
    return (
        <div className='flex justify-center items-center bg-gray-300 px-16 py-4'>
            <LogoListImg src="/src/assets/tnf-logo.png" alt="tnf-logo" />
            <LogoListImg src="/src/assets/patagonia-logo.png" alt="patagonia-logo" />
            <LogoListImg src="/src/assets/gramicci-logo.png" alt="gramicci-logo" />
            <LogoListImg src="/src/assets/carhartt-logo.png" alt="carhartt-logo" />
            <LogoListImg src="/src/assets/quicksilver-logo.png" alt="quicksilver-logo" />
            <LogoListImg src="/src/assets/columbia-logo.png" alt="columbia-logo" />
        </div>
    )
}

export default LogoList