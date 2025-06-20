"use client";

import About from "./userPages/About";
import Contact from "./userPages/Contact";
import Menu from "./userPages/Menu";
import Review from "./userPages/Review";
import Home from "./userPages/Home";
import Navbar from "./userPages/Navbar";
import Footer from "./userPages/Footer";
import { useEffect } from "react";
import { PageSpinner } from "../components/Loaders";
import UseUserAuth from "../hooks/useUserAuth";
// import UseFoodData from "../hooks/useFoodItem";

export default function Main() {
  const { getSetIsHydrated, getToken, isHydrated, isToken,getUserLogout,getSetRole,role } = UseUserAuth()


  
  useEffect(() => {
    // this is use to avoid hydration error 
    getSetIsHydrated();
    getToken();
    getSetRole()
  }, [])


  return (
    <div className="main-container">
      {!isHydrated ? <PageSpinner /> :
        <>
          <Navbar isToken={isToken} getUserLogout={getUserLogout} role={role} />
          <div className="scrollable-content .scrollbar">
            <Home />
            <About />
            <Menu />
            <Review />
            <Contact />
            <Footer />
          </div>
        </>}
    </div>
  );
}
