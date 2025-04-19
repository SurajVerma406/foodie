import React, { useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Burger = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const btnClickAuto = () => {
        const btn = document.querySelector('.slick-next');
        setInterval(() => {
            btn.click();
        }, 7000);
    }

    useEffect(() => {
        btnClickAuto();
    }, [])

    return (
        <>
            <section className='poppins slider-container text-white'>
                <div className='mainDiv mt-10 mb-20 mx-auto'>
                    <Slider {...settings}>
                        {
                            restaurant.map((element, index) => {
                                return (
                                    <div key={index} className="block w-full p-6 rounded-lg shadow">
                                        <h5 className="dancing mb-2 text-3xl sm:text-5xl font-bold tracking-tight">{element?.name}</h5>
                                        <p className="font-normal text-xs sm:text-xl my-5 text-gray-300">{element?.description}</p>
                                        <Link to="/menu">
                                            <button type="button" className='bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mx-auto lg:mx-0'>Order Now</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Burger




const restaurant = [
    {
        "name": "Fast Food Restaurant",
        "description": "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam."
    },
    {
        "name": "Fast Food Restaurant",
        "description": "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam."
    },
    {
        "name": "Fast Food Restaurant",
        "description": "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam."
    }
]

