import React from 'react'
import Button from '../../../components/Button'

function Hero() {

    const handleClick = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        })
    }

    return (
        <div className="hero min-h-full bg-[#f5f5f5]">
            <div className="flex items-center justify-center w-[80rem] gap-32 py-8">
                <div>
                    <h1 className="text-4xl font-bold">Explore your inside <br /> Explore your outdoor style</h1>
                    <p className="py-6 w-80">Discover your outdoor soulmate: sustainable gear, endless adventures. In2Forest shop, Good value for second hand outdoor gears are here! Let's shop and explore the world </p>
                    <Button type='button' color="primary" onClick={handleClick}>SHOP NOW</Button>
                </div>
                <img src="/src/assets/hero-img.jpeg" className="rounded-lg shadow-2xl w-[28rem]" />
            </div>
        </div>
    )
}

export default Hero