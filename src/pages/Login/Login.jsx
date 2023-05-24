import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header1 from '../../shared/Header1';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, singInGoogle } = useContext(AuthContext);
    const location = useLocation();

    // console.log(location)

    const from = location.state?.from.pathname || '/';

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password At least one uppercase character')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password At least one lowercase character')
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Password At least one digit')
            return;
        }
        else if (password.length < 6) {
            setError('Password Minimum 6 characters')
            return;
        }

        signInUser(email, password)
            .then((result) => {
                // console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        singInGoogle()
            .then((result) => {
                // console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div className='container mx-auto'>
            <Header1></Header1>
            <div className=' md:w-3/6 md:mx-auto mx-2 mt-5 mb-32'>
                <div className='border-2 pt-10 px-5 md:px-16 rounded-lg'>
                    <form onSubmit={handleLogin}>
                        <h3 className='text-3xl font-bold mb-10'>Login</h3>
                        {
                            error && <p className='text-error text-center'>{error}</p>
                        }


                        <input className='text-lg h-10 w-full placeholder-black border-b-2 border-b-[#C5C5C5] focus:outline-none focus:border-b-warning my-5' type="text" name="email" placeholder='Email' required />

                        <input className='text-lg h-10 w-full placeholder-black border-b-2 border-b-[#C5C5C5] focus:outline-none focus:border-b-warning my-5' type="password" name="password" placeholder='Password' required />

                        <Link className='text-warning underline block text-right my-4'>Forgot Password</Link>

                        <button className='btn btn-warning w-full hover:bg-yellow-500'>Login</button>
                    </form>
                    <p className='text-center my-4'>Don't have an account? <Link state={location.state ? {
                        from: location.state?.from
                    } : null} to='/register' className='text-warning underline'>Create an account</Link></p>
                </div>
                <div className="relative py-5 ">
                    <div className="absolute inset-0 flex items-center px-5 md:px-16">
                        <div className="w-full  border-b-2 border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sm text-gray-500">Or</span>
                    </div>
                </div>

                <div onClick={handleGoogleSignIn} className='cursor-pointer hover:bg-gray-100 flex items-center text-lg md:mx-16 border-2 p-2 rounded-full mb-2'>
                    <FaGoogle className='text-blue-400 text-3xl'></FaGoogle>
                    <p className='flex-grow text-center'>Continue with Google</p>
                </div>
                <div className='btn-disabled cursor-pointer hover:bg-gray-100  flex items-center text-lg md:mx-16 border-2 p-2 rounded-full mb-2'>
                    <FaFacebook className='text-blue-500 text-3xl'></FaFacebook>
                    <p className='flex-grow text-center'>Continue with Facebook</p>
                </div>

            </div>
        </div>
    );
};

export default Login;