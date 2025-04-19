import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // toggle password
    const togglePass = () => setTogglePassword(!togglePassword);

    return (
        <>
            <section className="poppins bg-gray-50 dark:bg-gray-900 py-14 pb-0">
                <div className="flex flex-col items-center px-5 py-8 mx-auto md:h-screen lg:py-10">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-screen-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">

                                <div className="grid md:grid-cols-2 gap-3">
                                    <button type="button" className="w-full flex justify-center items-center gap-2 text-white bg-orange-600 hover:bg-orange-800 active:bg-orange-700 hover:border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 md:py-2.5 text-center dark:border dark:hover:border dark:focus:ring-gray-800"><i className="text-lg bi bi-google"></i> <span className='relative -top-0.5'>Login with Google</span></button>
                                    <button type="button" className="w-full flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-800 active:bg-green-700 border hover:border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 md:py-2.5 text-center dark:border dark:hover:border dark:focus:ring-gray-800"><i className="text-lg bi bi-whatsapp"></i> <span className='relative -top-0.5'>Login with Github</span></button>
                                    <button type="button" className="w-full flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-700 border hover:border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 md:py-2.5 text-center dark:border dark:hover:border dark:focus:ring-gray-800"><i className="text-lg bi bi-facebook"></i> <span className='relative -top-0.5'>Login with Facebook</span></button>
                                    <button type="button" className="w-full flex justify-center items-center gap-2 text-white bg-purple-600 hover:bg-purple-800 active:bg-purple-700 border hover:border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 md:py-2.5 text-center dark:border dark:hover:border dark:focus:ring-gray-800"><i className="text-lg bi bi-envelope"></i> <span className='relative -top-0.5'>Login with Email</span></button>
                                </div>

                                <div className="relative border border-slate-600">
                                    <span className='absolute -top-3 left-1/2 text-white bg-gray-800 px-2'>or</span>
                                </div>

                                <div>
                                    <input ref={name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
                                </div>
                                <div>
                                    <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                                </div>
                                <div className='relative'>
                                    <input ref={password} type={togglePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <i onClick={togglePass} className={`${togglePassword ? 'hidden' : 'block'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-slash-fill transition-all`}></i>
                                    <i onClick={togglePass} className={`${togglePassword ? 'block' : 'hidden'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-fill transition-all`}></i>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="#" className="text-yellow-600 hover:underline dark:text-yellow-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;