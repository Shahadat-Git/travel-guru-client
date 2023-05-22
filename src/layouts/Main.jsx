import React, { useState } from 'react';
import bg from '../assets/bg.png'
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
const Main = () => {

    const bgStyle = {
        background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${bg})`,
        // backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div style={bgStyle} >
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;