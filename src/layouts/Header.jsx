import { Link } from "react-router-dom"

function Header() {
    return (
        <header className='flex justify-between h-20 px-16 bg-[#f0f0f0]'>
            <Link to="/" className='flex justify-center items-center gap-1' >
                <img className='w-14' src="/src/assets/circle-logo.png" alt="logo" role="button" />
                <h1 className='font-semibold text-lg' role="button">In2Forrest Shop</h1>
            </Link>
            <div className='flex items-center gap-6'>
                <div>
                    <img className='w-8' src="/src/assets/profile-header.png" alt="profile" />
                </div>
                <Link to="/cart/1">
                    <img className='w-8' src="/src/assets/cart-header.png" alt="cart" />
                </Link>
            </div>
        </header>
    )
}

export default Header