import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footter from './Footter'

function UserContaner() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footter />
        </div>
    )
}

export default UserContaner