import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';
import Hotels from '../pages/Hotels/Hotels';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';


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
        element: <PrivateRoute><Hotels></Hotels></PrivateRoute>,
        loader: ({ params }) => fetch(`https://travel-guru-server-lilac-chi.vercel.app/hotel/${params.id}`)
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router;