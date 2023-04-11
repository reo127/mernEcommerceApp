import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../assets/images/google.svg';
import { Link } from 'react-router-dom';
import { useSignInMutation } from '../reduxToolKit/services/userAPI';

const Login = () => {
    const navigate = useNavigate()
    const [login, responce] = useSignInMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignin = () => {
        login({email, password})
        console.log(responce)

        setEmail('')
        setPassword('')
        
        if(responce.isSuccess){
            navigate('/')
        }
    }


    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <div className="my-6 space-y-4 ">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600">
                        <img src={googleLogo} alt="googleLogo" width="25" />
                        <p className='font-bold font-mono'>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600" />
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600" />
                </div>
                <form action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                            onChange={ e => setEmail( e.target.value )}
                            value={email}
                             />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a> */}
                            </div>
                            <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
                            onChange={e => setPassword( e.target.value )}
                            value={password}
                             />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
                    onClick={handleSignin }
                    >Sign in</button>
                    <p className="text-sm text-center text-gray-600">Dont have account?
                        <Link to="/signup" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login