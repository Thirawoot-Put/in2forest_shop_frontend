import React from 'react'
import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom';

function RedirectAuthenticated({ children }) {
    const { authUser } = useAuth();
    return (
        authUser ? <Navigate to="/" /> : children
    );
};

export default RedirectAuthenticated