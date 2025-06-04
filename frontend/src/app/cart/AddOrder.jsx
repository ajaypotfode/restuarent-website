"use client"
import { useState } from 'react';
import '../../assets/css/cart.css';


export default function OrderForm({ orderItem, getCrtItemTotal, submitOrder, orderDetails, setOrderDetails, formError }) {

  return (
    <div className={"order-form-container"} onClick={(e) => e.stopPropagation()}>
      {/* <form className={"form"} onSubmit={handleSubmit}> */}
      <form className={"order-form"}>
        <h1 className="heading">Order <span>Food</span></h1>
        {/* <label>Name:</label> */}
        <input
          type="text"
          name="name"
          className={"input"}
          placeholder='Name'
          value={orderDetails.name || ""}
          onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
        // value={newFoodData.name || ""}
        // onChange={handleFoodItemData}
        />
        {formError.name && <p style={{ color: "red", margin: "0px",fontSize:'1.5rem' }} >{formError.name}</p>}


        {/* <label>Email:</label> */}
        <input
          type="email"
          name="email"
          className={"input"}
          placeholder='Email'
          value={orderDetails.email || ""}
          onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
        // value={newFoodData.name || ""}
        // onChange={handleFoodItemData}
        />
        {formError.email && <p style={{ color: "red", margin: "0px",fontSize:'1.5rem' }} >{formError.email}</p>}

        {/* <label>Phone:</label> */}
        <input
          type="tel"
          name="phone"
          className={"input"}
          placeholder='Phone'
          value={orderDetails.phone || ""}
          onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
        />
        {formError.phone && <p style={{ color: "red", margin: "0px", fontSize:'1.5rem' }} >{formError.phone}</p>}

        {/* <label>Address:</label> */}
        <textarea
          name="address"
          className={"textarea"}
          placeholder='Address'
          value={orderDetails.address || ""}
          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
        {formError.address && <p style={{ color: "red", margin: "0px",fontSize:'1.5rem' }} >{formError.address}</p>}


        <div className={"foodList"}>
          {orderItem.map((item, index) => (
            <div key={index} className={"foodItem"}>
              <div>
                <strong>{item.name}</strong> - ₹{item.price}
              </div>
              <div className='qauntity'>
                <span>Qty-</span>
                <span>{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={"total"}>Total Price: <span>₹ {getCrtItemTotal(orderItem)}</span></div>

        <button type="submit" className={"order-button"} onClick={submitOrder}>Place Order</button>

      </form>
    </div>
  );
}
