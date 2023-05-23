import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking/:id',
                element: <Booking></Booking>
            }
        ]
    }
])

export default router;