"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { FaBars, FaCartPlus } from "react-icons/fa";
import Link from "next/link";

const Navbar = ({ isToken, getUserLogout, role, getToken }) => {
  // const router = useRouter();
  const navbarRef = useRef();


  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  }


  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <Image src="/Images/logo.png" alt="Example Image" width={500} height={300} />
          {/* <img src={Logo} alt="" /> */}
        </a>
        <nav className="navbar" ref={navbarRef}>
          {/* <nav className="navbar"> */}
          <ul>
            <li className="link" ><Link href='/menu'>Today's Menu</Link></li>
            <li className="link" ><Link href='/orders'>My Orders</Link></li>
            {
              !isToken ? <li className="link"><Link href="/login" >Login</Link></li>
                : <li className="link" onClick={getUserLogout}>Logout</li>
            }
            {role === "admin" && <li className="link"><Link href="/admin" >Dashboard</Link></li>}
            {/* {
              !getToken() ? <li className="link"><Link href="/login" >Login</Link></li>
                : <li className="link" onClick={getUserLogout}>Logout</li>
            } */}

          </ul>
        </nav>
        <div className="icons">
          <div
            // className="fa-solid fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ><FaBars /></div>
        </div>
      </header>
    </>

  );
};

export default Navbar;
