import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/signup";
import Login from "../pages/auth/login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../lib/Layouts/mainLayout";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/signup',
                    element: <SignUp/>,
                    index: true
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                }
            ]
        }
    ]
)

export default router;
