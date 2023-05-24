import React, { useContext } from 'react';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header1 = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('Logout Successful')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container mx-auto md:py-5'>
            <div className="navbar bg-transparent flex justify-between items-center">
                <div>
                    <Link to='/'><img className='w-32 text-white' src={logo} alt="" /></Link>
                </div>

                <div className="black hidden lg:flex gap-16">
                    <Link className='font-semibold'>News</Link>
                    <Link className='font-semibold'>Destination</Link>
                    <Link className='font-semibold'>Blog</Link>
                    <Link className='font-semibold'>Contact</Link>
                </div>
                {
                    user ? <div> <p className='text-black mr-3'>{user.email}</p> <button onClick={handleLogOut} className='btn btn-error'>Log Out</button></div> : <Link to='/login' className='btn btn-warning'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header1;