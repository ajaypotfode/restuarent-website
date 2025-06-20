
"use client"
import React, { useContext, useEffect } from "react";
import '../../assets/css/menuPage.css'
import { menuType } from "../../data/Data";
import Image from "next/image";
import UseFoodData from "../../hooks/useFoodItem";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import UseCartItem from "../../hooks/useCartItem";
import { PageSpinner } from "../../components/Loaders";

const MenuPage = () => {
    const { foodItem, loading, getFoodItems, } = UseFoodData()

    const { addCartItems, cartCount } = UseCartItem()

    useEffect(() => {
        getFoodItems("all")
    }, [])


    return (
        <>
            <section className="menu" id="menu">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="logo-item">
                            <a href="#" className="logo">
                                <Image src="/Images/logo.png" alt="Example Image" width={70} height={200} />
                            </a>
                        </li>
                        <li className="heading-item">
                            <h1 className="heading">
                                Our <span>Menu</span>
                            </h1>
                        </li>
                        <li className="nav-links">
                            <Link href="/" className="btn">Home</Link>
                            <Link
                                href='/cart'
                                style={{ fontSize: "30px", cursor: "pointer" }}
                                id="cart-btn"
                            >
                                <span className="cart-icon-wrapper">
                                    <FaCartPlus />
                                    <sup className="cartCount">{cartCount}</sup>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="menutype" id="menulist" >
                    {menuType.map((items, index) => {
                        return (
                            <>
                                <div className="menuitems" key={items.id} onClick={() => getFoodItems(items.name)}>
                                    <span>{items.img}</span>
                                    <p>{items.name}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="menu-card-container scrollbar-hidden">
                    {/* {menuList.map((item,index) => {  */}
                    {
                        loading["food/fetchFoodItems"] ? (<PageSpinner />)
                            : (foodItem.map((item) => {
                                // const { id, name, price, image, description } = item;
                                const { _id, name, price, image, description } = item;
                                return (
                                    <div className="menu-card" key={_id}>
                                        {/* <div className="menu-card" key={index}> */}
                                        <div className="img">
                                            <Image src={image} height={100} width={100} alt="Food image" />
                                        </div>
                                        <div className="content">
                                            <h3>{name}</h3>
                                            <h5 className="text-light">{description}</h5>
                                        </div>
                                        <div className="price-section">
                                            <div className="price">{price} Rs</div>
                                            <button className="btn bg-warning" onClick={() => addCartItems(item)}>Add TO Cart</button>
                                        </div>
                                    </div>
                                );
                            })
                            )}
                </div>

            </section>
        </>
    );
};

export default MenuPage;
