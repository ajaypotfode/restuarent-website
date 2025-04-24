"use client"
// import Image from "next/image";
import About from "./userPages/About";
import Contact from "./userPages/Contact";
import Menu from "./userPages/Menu";
import Review from "./userPages/Review";
import Home from "./userPages/Home";
import Navbar from "./userPages/Navbar";
import Footer from "./userPages/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Main() {
  // const router = useRouter();

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Review/>
    <Contact/>
    <Footer/>
    </>
  );
}
