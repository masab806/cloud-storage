import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/signup";
import Login from "../pages/auth/login";
import MainLayout from "../lib/Layouts/mainLayout";
import HomePage from "../pages/HomePage/Homepage";


const router = createBrowserRouter(
    [
        {
            path: '/signup',
            element: <SignUp />,
            index: true
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [

                {
                    path: '/home',
                    element: <HomePage />
                }
            ]
        }
    ]
)

export default router;
