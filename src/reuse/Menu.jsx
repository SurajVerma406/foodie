import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [category, setCategory] = useState('All');
    const [load, setLoad] = useState("hidden");

    const highlight = (e) => {
        setCategory(e.target.innerText);
        removeBg();
        e.target.style.background = '#475569';
    };

    const removeBg = () => {
        const categories = ['all', 'burger', 'pizza', 'pasta', 'fries'];
        categories.forEach(cat => {
            document.getElementById(cat).style.background = 'transparent';
        });
    };

    const loadItems = () => {
        if (location.pathname === "/") {
            setLoad("block");

            setTimeout(() => {
                setLoad("hidden");
                navigate("/menu");
            }, 2000);
        }
    }

    useEffect(() => {
        if (location.pathname === "/menu") {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <section className={`text-white ${location.pathname === '/' ? 'py-20 px-5' : 'py-20 md:py-40 px-5'}`}>
            <h1 className="dancing text-5xl text-center">Our Menu</h1>

            <ul className='max-w-screen-sm mx-auto grid grid-cols-1 sm:grid-cols-5 justify-center items-center gap-2 sm:gap-7 text-sm sm:text-[17px] font-semibold my-10'>
                <li onClick={highlight} className='bg-slate-600 px-5 py-2 rounded-3xl text-center' id='all'>All</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='burger'>Burger</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='pizza'>Pizza</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='pasta'>Pasta</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='fries'>Fries</li>
            </ul>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    menu.filter((menu) => {
                        return (
                            category === 'All' || menu.heading.includes(category))
                    }).slice(0, location.pathname !== "/menu" ? 6 : menu.length).map((menu, index) => {
                        return (
                            <div key={index} className="rounded-2xl overflow-hidden bg-[#222831]">
                                <div className="menuDiv bg-slate-600 h-60 w-full flex justify-center items-center rounded-es-[45px] rounded-ee-[45px]">
                                    <img className='w-44 transition-all select-none' src={menu.image} alt={menu.heading} />
                                </div>
                                <div className="p-5">
                                    <h1 className="text-[18px] sm:text-[20px] mb-2 select-none font-semibold">{menu.heading}</h1>
                                    <p className="text-xs sm:text-[15px] sm:leading-snug select-none text-neutral-300">{menu.para}</p>
                                    <div className="flex justify-between menus-center mt-6">
                                        <span className="text-[18px]">{menu.price}</span>
                                        <span className='bg-yellow-700 hover:bg-yellow-700 p-2 rounded-md hover:scale-110 active:scale-100'>
                                            <Icon icon="mdi:trolley" width="18" height="18" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <center>
                <button onClick={loadItems} type="button" className={`flex justify-center items-center ${location.pathname !== "/" ? "hidden" : "block"} text-xs sm:text-[18px] bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 px-4 py-3 mt-10 w-40 rounded-3xl transition-all`}>
                    <span className={`${load !== "hidden" ? "hidden" : "block"}`}>View More</span>
                    <span className={`${load}`}>
                        <Icon icon="svg-spinners:ring-resize" width="24" height="24"></Icon>
                    </span>
                </button>
            </center>
        </section>
    );
};

export default Menu;

const menu = [
    {
        heading: 'Cheese Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f1.png"),
        price: '$20'
    },
    {
        heading: 'Veggie Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f2.png"),
        price: '$15'
    },
    {
        heading: 'Crown Crust Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f3.png"),
        price: '$17'
    },
    {
        heading: 'Delicious Pasta',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f4.png"),
        price: '$18'
    },
    {
        heading: 'French Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f5.png"),
        price: '$10'
    },
    {
        heading: 'Veg Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f6.png"),
        price: '$15'
    },
    {
        heading: 'Tasty Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f7.png"),
        price: '$12'
    },
    {
        heading: 'Chicken Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f8.png"),
        price: '$14'
    },
    {
        heading: 'Macaroni Pasta',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f9.png"),
        price: '$10'
    },
    {
        heading: 'Tomato Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f10.png"),
        price: '$10'
    },
    {
        heading: 'Chicken Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f11.png"),
        price: '$10'
    },
    {
        heading: 'Burger King',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f12.png"),
        price: '$10'
    },
    {
        heading: 'Tasty Beef Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f13.png"),
        price: '$10'
    },
    {
        heading: 'Juicy Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f14.png"),
        price: '$10'
    },
    {
        heading: 'Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f15.png"),
        price: '$10'
    },
    {
        heading: 'Veg Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f16.png"),
        price: '$10'
    },
    {
        heading: 'Cheese and Chicken Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f17.png"),
        price: '$10'
    },
    {
        heading: 'Steak Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f18.png"),
        price: '$10'
    },
    {
        heading: 'Natural Cut Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f19.png"),
        price: '$10'
    },
    {
        heading: 'Bacon Onion Pizza',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f20.png"),
        price: '$10'
    },
    {
        heading: 'Delicious Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f21.png"),
        price: '$10'
    },
    {
        heading: 'Belgian Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f22.png"),
        price: '$10'
    },
    {
        heading: 'Sweet Potato Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f23.png"),
        price: '$10'
    },
    {
        heading: 'Waffle Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f24.png"),
        price: '$10'
    },
    {
        heading: 'Shoestring Fries',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f25.png"),
        price: '$10'
    },
    {
        heading: 'Veggie Cheese Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f26.png"),
        price: '$10'
    },
    {
        heading: 'Fried Chicken Burger',
        para: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: require("../Images/menu/f27.webp"),
        price: '$10'
    },
];

