
"use client"
import React, { useContext } from "react";
import { useState } from "react";
import { menuimg } from "@/data/Data";
import data from "@/data/menu"
import { UserAuthContext } from "../../context/userContext";
import Image from "next/image";
import { MdFreeBreakfast } from "react-icons/md";


const Menu = () => {
  const context = useContext(UserAuthContext);
  const [updatedFood, setUpdatedFood] = useState(data)
  
  const { foodData } = context
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="menutype" id="menulist" >
          {menuimg.map((items, index) => {
            return (
              <>
                <div className="menuitems" key={items.id}>
                  <span>{items.img}</span>
                  <p>{items.name}</p>
                </div>
              </>
            )
          })}
        </div>
        <div className="box-container">
          {foodData.map((item, index) => {
            return (
              <div className="box" key={item._id}>
                <div className="img">
                  <Image src={item.image} height={50} width={80} alt="alternate img" />
                </div>
                <h3>{item.name}</h3>
                <h5 className="text-light">{item.description}</h5>
                <div className="price">
                  {item.price} .Rs
                </div>
                <button className="btn bg-warning">Add TO Cart</button>

              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
