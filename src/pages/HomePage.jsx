import React from 'react'
import Hero from '../features/home/components/Hero'
import LogoList from '../features/home/components/LogoList'
import ProductFeed from '../features/home/components/ProductFeed'

function HomePage() {
    return (
        <>
            <Hero />
            <LogoList />
            <ProductFeed />
        </>

    )
}

export default HomePage