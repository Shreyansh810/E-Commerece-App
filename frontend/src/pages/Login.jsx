import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currState, setCurrState] = useState('Login');
    const { token, setToken, navigate, backend_url } = useContext(shopContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = async (e) => {
        event.preventDefault();

        try {
            if (currState === 'Sign Up') {
                const response = await axios.post(backend_url + "/api/user/register", { name, email, password });
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(backend_url + "/api/user/login", { email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={onSubmitHandler}>

            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='text-3xl'>{currState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            {currState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot Your Password?</p>
                {
                    currState === 'Login'
                        ? <p onClick={() => setCurrState('Sign Up')} className='cursor-pointer'>Create Account</p>
                        : <p onClick={() => setCurrState('Login')} className='cursor-pointer'>Login Here</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login
