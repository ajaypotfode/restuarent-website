"use client"
import React, { useContext, useRef, useState } from 'react';
import '@/assets/css/cart.css'
// import '../../assets/css/cart.css';
import { UserAuthContext } from '@/context/userContext';
const Cart = () => {
    const context = useContext(UserAuthContext);
    // const navigate = useNavigate();
    const { cartItems, setItems } = context;

    return (
        <>
            {/* <div className="cart-Container" ref={mainCont}> */}
            <div className="cart-Container" >
                <h1 className="heading">
                    <span>My</span> Cart
                    <button
                        className="position-absolute top-0 end-0 fs-3 m-4 "
                        id="cart-btn"
                    >
                        {/* <FaXmark /> */}
                    </button>
                </h1>
                <table className='cart-items'>
                    <thead>
                        <tr>
                            <th><label htmlFor="">Food</label></th>
                            <th><label htmlFor="">quantity</label></th>
                            <th><label htmlFor="">price</label></th>
                            <th><label htmlFor="">action</label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='item-name'>
                                    <img src="/Images/menu-items/veg.png" alt="image not found" height={60} width={60} />
                                    {/* <img src={``} alt="" height={60} width={60} /> */}
                                    <span className='items-value'>Banana cake</span>
                                </div>
                            </td>
                            <td>
                                <input
                                    className='items-value'
                                    type="number"
                                    // value="1"
                                    min={1}
                                />
                            </td>
                            <td>
                                <span className='items-value'>
                                    {/* {price * (quantities[name] || 1)} Rs */}
                                    200 rs
                                </span>
                            </td>
                            <td>
                                <div className='action-btn'>
                                    <span id='delete-btn'>delete</span>
                                    <span>order</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='item-name'>
                                    <img src="/Images/menu-items/veg.png" alt="image not" height={60} width={60} />
                                    {/* <img src={``} alt="" height={60} width={60} /> */}
                                    <span className='items-value'>Banana cake</span>
                                </div>
                            </td>
                            <td>
                                <input
                                    className='items-value'
                                    type="number"
                                    value="1"
                                    min={1}
                                />
                            </td>
                            <td>
                                <span className='items-value'>
                                    {/* {price * (quantities[name] || 1)} Rs */}
                                    200 rs
                                </span>
                            </td>
                            <td>
                                <div className='action-btn'>
                                    <span id='delete-btn'>delete</span>
                                    <span>order</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="cart-footer">
                    <div className='items'>
                        <label htmlFor="">Total</label>
                        <span className='items-value'>1000 Rs</span>
                    </div>
                    <button className='btn '>Back To Menu</button>
                </div>
            </div>
        </>
    );
};

export default Cart;