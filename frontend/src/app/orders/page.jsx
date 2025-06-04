"use client"
import React, { useEffect } from 'react'
import '../../assets/css/order.css'
import Image from 'next/image';
import Link from 'next/link';
import UseOrderItem from '../../hooks/useOrderItem';
import { toast } from 'react-toastify';
import { PageSpinner } from '../../components/Loaders';
// import OrderForm from '../cart/AddOrder'

const OrderList = () => {
  const { getOrderData, orderItem, getDeleteOrder,loading } = UseOrderItem()

  useEffect(() => {
    getOrderData()
  }, [])


  return (
    <>
      {/* {
  toast.success("login sucee")
} */}
      <section className="menu" id="menu">
        <div className='order-cards-container-main overflow-y-auto'>
          <nav className="navbar">
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
              </li>
            </ul>
          </nav>

          {/* {orderItem.map((order,index) => ( */}
          <div className='order-cards-container scrollbar-hidden'>
            {
              loading["order/fetchOrderItems"] ? (<PageSpinner />)
                : (
                  orderItem.map((order, index) => (
                    <div className="order-card" key={index}>
                      <header className={"cardHeader"}>

                        <span
                          className={`${"status"} ${order.status === 'Fulfilled' ? "fulfilled " : "pending"
                            }`}
                        >
                          {order.status}
                        </span>
                        <div>
                          <button className='delete-btn' onClick={() => getDeleteOrder(order._id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                          {/* <h2 className={"orderId"}>Order #123</h2> */}
                        </div>
                      </header>

                      <ul className={"itemList"}>
                        {order.items.map((item) => (
                          <li key={item.orderId} className={"itemRow"}>
                            <div className={"imgWrap"}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="48px"
                                className={"img"}
                              />
                            </div>

                            <div className={"itemInfo"}>
                              <div>
                                {/* <h3>Dish Name:</h3> */}
                                <h3 className={"name"}>Dish Name : <span className='name-value'>{item.name}</span></h3>
                              </div>
                              {/* <p className={"type"}>{item.type}</p> */}
                              <p className={"food-price"}>
                                Dish Price : {item.price} Rs.
                              </p>
                              <p className={"quantity"}>
                                Quantity Ordered :  {item.quantity}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className='card-footer'>
                        {/* <span className='total'>Total :</span> */}
                        <span className={"total-value"}><span className='total'>Total :</span> ₹ {order.totalAmount}</span>
                      </div>
                    </div>
                  ))
                )
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default OrderList