// import Image from "next/image";
import About from "@/app/userPages/About";
import Contact from "@/app/userPages/Contact";
import Menu from "@/app/userPages/Menu";
import Review from "@/app/userPages/Review";
import Home from "@/app/userPages/Home";
import Navbar from "./userPages/Navbar";
import Footer from "./userPages/Footer";

export default function Main() {
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
