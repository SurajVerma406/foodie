import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';
import account from '../appwrite/appWrieConfig';

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { setUser, Toaster, googleAuth, githubAuth, errorFunc } = context;

    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [togglePassword, setTogglePassword] = useState(false);

    // toggle password
    const togglePass = () => setTogglePassword(!togglePassword);

    const onchange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    // Login User
    const loginUser = async (e) => {
        e.preventDefault();

        console.log(userInfo);

        try {
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            const response = await account.get();
            setUser(response);
            localStorage.setItem("userDetails", JSON.stringify(response));
            navigate("/");
        } catch (error) {
            console.error(error.message);
            errorFunc(error.message.split(":")[1]?.trim() || error.message);
            console.error("Registration error:", error);
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <div className="poppins text-white flex h-screen w-screen">
                <div className="p-10 sm:py-20 w-full md:w-[35rem] h-full">
                    <div className="">
                        <img src={require("../Images/Logo.png")} alt="" className="w-28 mb-5" />
                        <h1 className="text-3xl sm:text-4xl">Log in to your account</h1>
                        <p className="sm:text-xl my-2">
                            <span className="">Don't have an account? </span>
                            <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a>
                        </p>
                    </div>

                    <form onSubmit={loginUser} className="space-y-4 md:space-y-6 text-white pt-3">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 text-2xl font-medium text-white pb-2">
                            <button onClick={googleAuth} type="button" className="group w-full bg-transparent hover:bg-white/10 active:bg-white/20 rounded-lg px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:bg-orange-700 border border-white/20 flex justify-center items-center">
                                <span className="md:group-hover:hidden "><Icon icon="flat-color-icons:google" width="24" height="24"></Icon></span>
                                <span className="hidden md:group-hover:block"><Icon icon="logos:google" width="73.15" height="24"></Icon></span>
                            </button>

                            <button onClick={githubAuth} type="button" className="group w-full bg-[#333333] hover:bg-[#242424] active:bg-[#1b1b1b] rounded-lg px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#333333] disabled:active:bg-[#333333]">
                                <i className="md:group-hover:hidden ri-github-fill"></i>
                                <center className="hidden md:group-hover:block"><Icon icon="octicon:logo-github-16" width="65" height="32"></Icon></center>
                            </button>
                        </div>

                        <div className="relative border border-slate-600">
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-gray-300 bg-gray-900 px-2 inline-block whitespace-nowrap">
                                or with email and password
                            </span>
                        </div>

                        <div>
                            <input onChange={onchange} type="email" name="email" id="email" className="block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark focus:ring-blue-500 focus:border-blue-500 rounded-lg" placeholder="name@gmail.com" required />
                        </div>
                        <div className='relative'>
                            <input onChange={onchange} type={togglePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg" required />
                            <i onClick={togglePass} className={`${togglePassword ? 'hidden' : 'block'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-slash-fill transition-all`}></i>
                            <i onClick={togglePass} className={`${togglePassword ? 'block' : 'hidden'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-fill transition-all`}></i>
                        </div>
                        <div className="flex items-center justify-between gap-x-5 gap-y-2 flex-wrap">
                            <Link to="/" className="text-sm font-medium text-blue-400 hover:underline ">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-fit focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-600">Sign in</button>
                    </form>
                </div>

                <div className="hidden md:block w-full flex-1">
                    <img src={require("../Images/login_desktop.png")} alt="login_desktop" className=" object-cover w-full h-full" />
                </div>
            </div>
        </>
    );
};

export default Login;