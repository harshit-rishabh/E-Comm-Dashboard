import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateComponent(){
    const checkey = localStorage.getItem('user');
    return (
        checkey?<Outlet />:<Navigate to = "/signup" />
    )
}