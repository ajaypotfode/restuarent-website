"use client"
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { menuCard, menuimg } from "../../data/Data";
// import data from "../../data/menu"
import { UserAuthContext } from "../../context/foodItemContext";
import Image from "next/image";
import { MdFreeBreakfast } from "react-icons/md";
import { OrderFood } from "../../context/orderContext";


const Menu = () => {
  // const foodContext = useContext(UserAuthContext);
  // const cartContext = useContext(OrderFood)
  // const { getItemsCategory, filterdData } = foodContext
  // const { addCartItems, cartItem } = cartContext
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container">
          {menuCard.map((item, index) => {
            const { name, image, description } = item
            return (
              <div className="box"
                key={index}
              >
                <div className="img">
                  <Image src={image} height={50} width={80} alt="alternate img" />
                </div>
                <h3>{name}</h3>
                {/* <h3>Biryani</h3> */}
                <h5 className="text-light">{description}</h5>
                <div className="price">
                  {/* {price} .Rs */}
                  {/* 200 Rs */}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
