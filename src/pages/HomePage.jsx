import React from 'react'
import Hero from '../features/home/components/Hero'
import LogoList from '../features/home/components/LogoList'
import ProductAllSections from '../features/home/components/ProductAllSections'

function HomePage() {
    return (
        <>
            <Hero />
            <LogoList />
            <ProductAllSections />
            {/* <button className='btn'>Hi</button> */}
        </>

    )
}

export default HomePage