"use client"
import React, { useContext, useRef, useState } from 'react';
import '@/assets/css/cart.css'
// import '../../assets/css/cart.css';
import { UserAuthContext } from '@/context/userContext';
// import { FaXmark } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';
// import {toast,ToastContainer } from 'react-toastify';

const Cart = () => {
    const context = useContext(UserAuthContext);
    // const navigate = useNavigate();
    const { cartItems,setItems} = context;
    // const [quantities, setQuantities] = useState({});
    // const billref = useRef()
    // const mainCont=useRef()

    // // Use for back to homepage
    // const pageNavigation = () => {
    //     return navigate("/")
    // }

    // const billContainer = (info) => {
    //     billref.current.classList.toggle("active");
    //     mainCont.current.classList.toggle("active-blur")
    //    info?toast.info("Your Order Is confirmed!!"):toast.info("Thank You for ordering!!") 
    //    !info&&setItems([])   
    // }
   
    // // Handle quantity change
    // const handleQuantityChange = (name, value) => {
    //     setQuantities({
    //         ...quantities,
    //         [name]: value
    //     });
    // };

    // const removeCartItems = (id) => {
    //     setItems(cartItems.filter((item) => item.id !== id))
    // }


    // // Calculate the total price
    // const totalPrice = cartItems.reduce((total, item) => {
    //     const quantity = quantities[item.name] || 1; // Default to 1 if not found
    //     return total + (item.price * quantity);
    // }, 0);

    return (
        <>
            {/* <div className="cart-Container" ref={mainCont}> */}
            <div className="cart-Container" >
                <h1 className="heading d-flex">
                    <span>My</span> Cart
                    <button
                        className="position-absolute top-0 end-0 fs-3 m-4 "
                        id="cart-btn"
                        // onClick={pageNavigation}
                    >
                        {/* <FaXmark /> */}
                    </button>
                </h1>

                {
                    cartItems.map((item, index) => {
                        const { image, name, price, id } = item;
                        return (
                            <div className='cart-items'>
                                <div className='items'>
                                    <label htmlFor="">Food</label>
                                    <div>
                                        <img src={``} alt="" height={60} width={60} />
                                        <span className='items-value'>Banana cake</span>
                                    </div>
                                </div>
                                <div className='items'>
                                    <label htmlFor="">Quantity</label>
                                    <input
                                        className='items-value'
                                        type="number"
                                        // value={quantities[name] || 1}
                                        min={1}
                                        // onChange={(e) => handleQuantityChange(name, e.target.value)}
                                    />
                                </div>
                                <div className='items'>
                                    <label htmlFor="">Price</label>
                                    <span className='items-value'>100 Rs</span>
                                </div>
                                <div className='items'>
                                    <label htmlFor="">Total Price</label>
                                    <span className='items-value'>
                                        {/* {price * (quantities[name] || 1)} Rs */}
                                        200 rs
                                    </span>
                                </div>
                                <div className='items' id='delete-btn'>
                                    <label htmlFor="">Delete</label>
                                    <button>Remove</button>
                                    {/* <button className='items-value remove-btn' onClick={() => removeCartItems(id)}>Remove</button> */}
                                </div>

                            </div>
                        );
                    })}

                {/* <div className="cart-footer">
                    <div className='items'>
                        <label htmlFor="">Total</label>
                        <span className='items-value'>{totalPrice} Rs</span>
                    </div>
                    <button className='btn' onClick={billContainer}>Confirm Order</button>
                </div>
            </div>
            <div className="bill-container" ref={billref}>
                    <h4 className="heading ">
                        <span>Food</span>Bill
                        <button
                            className="cancel-btn"
                            id="cart-btn"
                            onClick={()=>billContainer("")}
                        >
                            <FaXmark />
                        </button>
                    </h4>
                    <div className='bill-Items'>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <>

                                        <ul className='items'>
                                        <li className='d-flex gap-5 justify-content-between'><p>{item.name}</p><p>{item.price}</p></li>
                                        </ul>
                                    </>
                                )
                            })
            
                        }
                        <div className="total">
                        <h3>Total</h3><h3>{totalPrice} Rs</h3>
                        </div>
                    </div>
                    
                </div>
            <ToastContainer
             position="top-center"
             autoClose={1000}
             hideProgressBar/> */}
             </div>
        </>
    );
};

export default Cart;