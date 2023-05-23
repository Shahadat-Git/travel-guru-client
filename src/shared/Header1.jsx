import React from 'react';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <div className='container mx-auto py-5'>
            <div className="navbar bg-transparent flex justify-between items-center">
                <div>
                    <Link to='/'><img className='w-32 text-white' src={logo} alt="" /></Link>
                </div>

                <div className="black flex gap-16">
                    <Link className='font-semibold'>News</Link>
                    <Link className='font-semibold'>Destination</Link>
                    <Link className='font-semibold'>Blog</Link>
                    <Link className='font-semibold'>Contact</Link>
                    <button className='btn btn-warning'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header1;