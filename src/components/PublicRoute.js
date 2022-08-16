import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import {Navigate, Outlet } from 'react-router-dom';


export default function PublicRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    return !currentUser ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
}
