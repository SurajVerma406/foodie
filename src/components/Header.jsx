import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import myContext from '../context/myContext';

const Header = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const listRef = useRef();

    const location = useLocation();
    const { cart, Toaster } = context;

    const [isOpen, setIsOpen] = useState(false);
    const toggleList = () => { setIsOpen(!isOpen); };

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const clickOutsideNav = (e) => {
            if (listRef.current && !listRef.current.contains(e.target)) setIsOpen(false);
        };

        if (isOpen) document.addEventListener("mousedown", clickOutsideNav);
        return () => document.removeEventListener("mousedown", clickOutsideNav);

    }, [isOpen,location.pathname]);

    return (
        <>
            <Toaster position="bottom-right" />
            <nav ref={listRef} className="poppins fixed bg-black/50 w-full z-50 top-0 start-0" style={{ backdropFilter: 'blur(5px)' }}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="w-16" src={require("../Images/Logo.png")} alt="Logo" />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="flex justify-center items-center text-white">
                            <button onClick={() => navigate("/cart")} type="button" className='relative p-2 rounded-lg'>
                                <span className="hover:text-yellow-600"><Icon icon="mdi:trolley" width="22" height="22"></Icon></span>
                                <span className="absolute -top-1.5 -right-0.5 text-xs font-semibold text-red-600">{cart.length}</span>
                            </button>
                            <button type="button" className="relative hidden sm:flex text-white ms-3 bg-yellow-600 hover:bg-yellow-80 active:bg-yellow-700 font-medium rounded-md text-sm px-4 py-2 text-center">
                                <span className="">Suraj</span>
                            </button>
                        </div>

                        <button onClick={toggleList} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-slate-500 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-center gap-3 w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-1 text-sm text-center font-semibold bg-transparent md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 uppercase text-gray-400">
                            <li><Link to="/" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-400'}`}>Home</Link></li>
                            <li><Link to="/about" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/about' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-400'}`}>About</Link></li>
                            <li><Link to="/menu" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/menu' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-400'}`}>Menu</Link></li>
                            <li className='group px-3 py-1.5 mt-2 lg:mt-0 focus:text-white rounded-md w-full relative block text-gray-400 hover:text-white'>
                                <span className='flex justify-center items-center'>Resources <Icon icon="iconamoon:arrow-down-2" width="24" height="24"></Icon></span>
                                <div className="hidden group-hover:flex justify-start text-start items-start gap-2 flex-col w-full sm:w-80 absolute right-0 top-[36px] sm:top-9 z-10 bg-slate-700 p-4 rounded-lg">
                                    <Link to="/discover" className={`block text-gray-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-2 lg:mt-0 rounded-md w-full ${location.pathname === '/discover' ? 'text-white bg-slate-400' : 'text-gray-400'}`}>Discover</Link>
                                    <Link to="/book-table" className={`block text-gray-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-2 lg:mt-0 rounded-md w-full ${location.pathname === '/book-table' ? 'text-white bg-slate-400' : 'text-gray-400'}`}>Book Table</Link>
                                    <Link to="/login" className={`block text-gray-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-2 lg:mt-0 rounded-md w-full ${location.pathname === '/login' ? 'text-white bg-slate-400' : 'text-gray-400'}`}>Login</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;