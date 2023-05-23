import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';
import Hotels from '../pages/Hotels/Hotels';


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
    },
    {
        path: '/hotel-booking/:id',
        element: <Hotels></Hotels>,
        loader: ({ params }) => fetch(`https://travel-guru-server-lilac-chi.vercel.app/hotel/${params.id}`)
    }
])

export default router;