import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import BookTable from './reuse/BookTable';
import Menu from './reuse/Menu';
import Discover from './reuse/Discover';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/book-table' element={<BookTable />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
