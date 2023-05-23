import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto py-5'>
            <div className="navbar bg-transparent flex justify-between items-center">
                <div>
                    <Link to='/'><img className='w-32 text-white' src={logo} alt="" /></Link>
                </div>

                <div className="text-white hidden md:flex gap-1 md:gap-5 lg:gap-16">
                    <input type="text" placeholder="Search your Destination..." className="input bg-[#ffffff23] border-1 hidden md:block border-white lg:w-96 text-white placeholder-white" />
                    <Link>News</Link>
                    <Link>Destination</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
                <div>
                    <button className='btn btn-warning'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;