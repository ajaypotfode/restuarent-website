"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../assets/css/cart.css'
// import '../../assets/css/cart.css';
import Image from "next/image";
import UseCartItem from '../../hooks/useCartItem';
import OrderForm from './AddOrder';
import Link from 'next/link';
import { FormSpinner } from '../../components/Loaders';


const CartList = [
    {
        name: 'Biryani',
        type: 'Lunch',
        image: '/Images/menu-items/cake.png',
        price: 200,
        quantity: 1,
    },
    {
        name: 'Pav-Bhaji',
        type: 'Snack',
        image: '/Images/menu-items/nonveg.png',
        price: 100,
        quantity: 2,
    },

    {
        name: 'Caesar Salad',
        type: 'Dinner',
        image: '/Images/menu-items/salad.png',
        price: 150,
        quantity: 3,
    },
    {
        name: 'Biryani',
        type: 'Lunch',
        image: '/Images/menu-items/cake.png',
        price: 200,
        quantity: 1,
    },
    {
        name: 'Pav-Bhaji',
        type: 'Snack',
        image: '/Images/menu-items/nonveg.png',
        price: 100,
        quantity: 2,
    },

    {
        name: 'Caesar Salad',
        type: 'Dinner',
        image: '/Images/menu-items/salad.png',
        price: 150,
        quantity: 3,
    },
    {
        name: 'Biryani',
        type: 'Lunch',
        image: '/Images/menu-items/cake.png',
        price: 200,
        quantity: 1,
    },
    {
        name: 'Pav-Bhaji',
        type: 'Snack',
        image: '/Images/menu-items/nonveg.png',
        price: 100,
        quantity: 2,
    },

    {
        name: 'Caesar Salad',
        type: 'Dinner',
        image: '/Images/menu-items/salad.png',
        price: 150,
        quantity: 3,
    },
    {
        name: 'Biryani',
        type: 'Lunch',
        image: '/Images/menu-items/cake.png',
        price: 200,
        quantity: 1,
    },
    {
        name: 'Pav-Bhaji',
        type: 'Snack',
        image: '/Images/menu-items/nonveg.png',
        price: 100,
        quantity: 2,
    },

    {
        name: 'Caesar Salad',
        type: 'Dinner',
        image: '/Images/menu-items/salad.png',
        price: 150,
        quantity: 3,
    },
    {
        name: 'Biryani',
        type: 'Lunch',
        image: '/Images/menu-items/cake.png',
        price: 200,
        quantity: 1,
    },
    {
        name: 'Pav-Bhaji',
        type: 'Snack',
        image: '/Images/menu-items/nonveg.png',
        price: 100,
        quantity: 2,
    },

    {
        name: 'Caesar Salad',
        type: 'Dinner',
        image: '/Images/menu-items/salad.png',
        price: 150,
        quantity: 3,
    }
];


const Cart = () => {
    const {
        cartItem,
        totalPrice,
        addCartItems,
        handleQuantityChange,
        removeCartItems,
        setAllCartItems,
        clearAllCartItems,
        orderForm,
        handleOrderForm,
        getCartItemTotal,
        handlePlaceOrder,
        loading,
        formError,
        orderDetails,
        setOrderDetails
    } = UseCartItem()

    return (
        <>
            {/* <div className="cart-Container" ref={mainCont}> */}
            <div className="cart-Container" >
                <nav className="cart-navbar">
                    <ul className="navbar-list">
                        <li className="logo-item">
                            <a href="#" className="logo">
                                <Image src="/images/logo.png" alt="Example Image" width={70} height={200} />
                            </a>
                        </li>
                        <li className="heading-item">
                            <h1 className="heading">
                                Your <span>Orders</span>
                            </h1>
                        </li>
                        <li className="nav-links">
                            <Link href="/" className="btn">Home</Link>
                            <Link href="/menu" className='btn'>Menu</Link>
                        </li>
                    </ul>
                </nav>
                <div className="cart-table-container scrollbar-hidden">
                    <table className='cart-items'>
                        <thead>
                            <tr>
                                <th><label htmlFor="">Food</label></th>
                                <th><label htmlFor="">quantity</label></th>
                                <th><label htmlFor="">price</label></th>
                                <th><label htmlFor="" className='action-th'>action</label></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map((item, index) => {
                                    // CartList.map((item, index) => {
                                    const { _id, name, price, image, quantity } = item
                                    return (
                                        <tr key={_id}>
                                            <td>
                                                <div className='item-name'>
                                                    <Image src={image} alt="" height={60} width={60} className='item-image' />
                                                    <span className='items-value'>{name}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <input
                                                    className='items-value'
                                                    type="number"
                                                    name='quantity'
                                                    value={quantity}
                                                    min={1}
                                                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <span className='items-value'>
                                                    {price * quantity} Rs
                                                </span>
                                            </td>
                                            <td>
                                                <div className='action-btn'>
                                                    <span id='delete-btn' onClick={() => removeCartItems(_id)}>cancle</span>
                                                    {/* <span>order</span> */}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-footer">
                    <div className='items'>
                        <label htmlFor="">Total</label>
                        <span className='items-value'>{totalPrice} Rs</span>
                    </div>
                    <button className='btn' onClick={handleOrderForm}>order</button>
                </div>
                {
                    loading["order/submitOrder"]
                        ? (<FormSpinner />)
                        : (
                            orderForm && <div className='form-background' onClick={handleOrderForm}>
                                <OrderForm
                                    orderItem={cartItem}
                                    getCrtItemTotal={getCartItemTotal}
                                    submitOrder={handlePlaceOrder}
                                    orderDetails={orderDetails}
                                    setOrderDetails={setOrderDetails}
                                    formError={formError}
                                />
                            </div>
                        )
                }
            </div >
        </>
    );
};

export default Cart;