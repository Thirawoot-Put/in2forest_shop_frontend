import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footter from './Footter'

function UserContaner() {
    return (
        <div class="flex flex-col h-screen">
            <Header />
            <Outlet />
            <Footter />
        </div>
    )
}

export default UserContaner