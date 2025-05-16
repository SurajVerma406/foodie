import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './reuse/Menu';
import Discover from './reuse/Discover';
import BookTable from './reuse/BookTable';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';

import account from './appwrite/appWrieConfig';
import { useContext, useEffect } from 'react';
import Signup from './components/Signup';
import myContext from './context/myContext';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const context = useContext(myContext);
    const { user, setUser } = context;

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await account.get();
                if (response) {
                    localStorage.setItem("userDetails", JSON.stringify(response));
                    setUser(response);
                }
                else {
                    localStorage.setItem("userDetails", null);
                    setUser(null);
                    navigate("/login");
                }
            } catch (error) {
                console.error(error.message);
                localStorage.setItem("userDetails", null);
                setUser(null);
                navigate("/login");
            }
        }

        getUser();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {location.pathname === "/login" || location.pathname === "/signup" ? "" : <Header />}
            <Routes>
                {
                    user ? (
                        <>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/menu' element={<Menu />} />
                            <Route path='/discover' element={<Discover />} />
                            <Route path='/book-table' element={<BookTable />} />
                            <Route path='/cart' element={<Cart />} />
                        </>
                    ) : null
                }
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            {location.pathname === "/login" || location.pathname === "/signup" ? "" : <Footer />}
        </>
    );
}

export default App;















const warnHide = () => {
    const originalWarn = console.warn;
    console.warn = function (msg, ...args) {
        if (typeof msg === 'string' && msg.includes('Appwrite is using localStorage')) return;
        if (typeof msg === 'string' && msg.includes('No routes matched location')) return;
        originalWarn.call(console, msg, ...args);
    };
}
warnHide();