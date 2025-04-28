import React, { useState } from 'react';
import myContext from './myContext';
import toast, { Toaster } from 'react-hot-toast';

const ContextState = (props) => {
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || []);

    // add menu into cart
    const addMenu = (menu) => {
        const isMenuInCart = cart.some((item) => item.heading === menu.heading);

        if (!isMenuInCart) {
            setCart([...cart, menu]);
            window.localStorage.setItem("cart", JSON.stringify([...cart, menu]));
        }
    }

    // remove menu from cart
    const removeFromCart = (menu) => {
        const updatedCart = cart.filter((item) => item.heading !== menu.heading);
        setCart(updatedCart);
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const removerMenu = () => {
        const confirm = window.confirm("Confirm to remove all items from your cart.");
        if (confirm) {
            window.localStorage.removeItem("cart");
            setCart([]);
            successFunc("Removed all items!!");
        }
    }

    const successFunc = (message) => toast.success(message);
    const errorFunc = (message) => toast.error(message);

    return (
        <myContext.Provider value={{
            Toaster,
            cart,
            addMenu, removerMenu, removeFromCart, successFunc, errorFunc
        }}>
            {props.children}
        </myContext.Provider>
    )
}

export default ContextState
