import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/signup";
import Login from "../pages/auth/login";


const router = createBrowserRouter(
    [
        {
            path: '/signup',
            element: <SignUp/>,
            index: true
        },
        {
            path: '/login',
            element: <Login/>
        }
    ]
)

export default router;
