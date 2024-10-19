
"use client"
import React, { useContext } from "react";
import { useState } from "react";
import { menuimg } from "@/data/Data";
import data from "@/data/menu"
import { UserAuthContext } from "../../context/userContext";
import Image from "next/image";
// import { ToastContainer, toast } from 'react-toastify';


const Menu = () => {
  const context = useContext(UserAuthContext);
  const [updatedFood, setUpdatedFood] = useState(data)
   const {getMenuData,user,cartItems}=context

  const foodType = (foodname) => {
    const fType = data.filter((fItems) => {
      return foodname == fItems.category
    })
    setUpdatedFood(fType)
  }
  
  const addToCart = (image, name, price, id) => {
    // Check if user is authenticated
    // if (!user) {
    //   toast.error("Login First");
    //   return;
    // }

  //   // Check if the item already exists in the cart
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      return;
    }

  //   // Add new item to the cart
    getMenuData({image,name, price, id})
  }
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="menutype" id="menulist" >
          {
            menuimg.map((items, index) => {
              return (
                <>
                  <div className="menuitems" key={items.id} onClick={() => { foodType(items.name) }}>
                   <img src={items.img} alt="" />
                      <p>{items.name}</p>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="box-container">
          {updatedFood.map((item, index) => (
            <div className="box" key={index}>
              <div className="img">
                <Image src={item.image} height={50} width={80}/>
              </div>
              <h3>{item.name}</h3>
              <h5 className="text-light"> sit amet consectetur adipisicing elit. Accusantium magnam odit fugiat.</h5>
              <div className="price">
                Rs. {item.price}
              </div>
              <button className="btn bg-warning" onClick={()=>{addToCart(item.image,item.name,item.price,item.id)}} >Add TO Cart</button> 
              {/* <button className="btn bg-warning" >Add TO Cart</button>  */}
            </div>
          ))}
        </div>
      </section>
      {/* <ToastContainer
         position="top-center"
         autoClose={2000}
         hideProgressBar/> */}
    </>
  );
};

export default Menu;
