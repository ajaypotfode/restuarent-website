"use client"
import { imageDb } from '@/utils/firebase';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

export const UserAuthContext = createContext();
const ContextProvider = ({ children }) => {

  const [foodItem, setFoodItem] = useState({});
  const [foodData, setFoodData] = useState([])
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
   const router =useRouter()

  // getting image URL through the firebase
  const handleImageUpload = async () => {
    const { image } = foodItem;
    if (!image) return null;
    setLoading(true)
    try {
      const imageRef = ref(imageDb, `images/${image.name + uuidv4()}`);
      const metadata = { contentType: image.type };
      const uploadimage = await uploadBytes(imageRef, image, metadata);
      return await getDownloadURL(uploadimage.ref);

    } catch (error) {
      console.error("Image upload error:", error);
      alert("Image upload error");
      setLoading(false)
      return null;
    }
  };

   // submiting a data to the mongo db
  const submitFoodData = async (e) => {
    e.preventDefault()
    try {
      const imageUrl = await handleImageUpload();
      if (imageUrl == null) return;

      const updatedFoodItem = { ...foodItem, image: imageUrl };

      const res = await axios.post(process.env.NEXT_PUBLIC_DOMAIN+"/api/menuData", updatedFoodItem);
      setLoading(false)
      alert("Data submitted successfully");
      window.location.reload()
    } catch (error) {
      console.error("Data submission error:", error);
      window.location.reload()
      setLoading(false)
      setError(error);
    }
  };

  // getting data from mongo db
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_DOMAIN+"/api/menuData")
        const data = await res.data
        setFoodData(data)

      } catch (error) {
        console.error(error);
      }
    })()
  }, [])

  // Delete Food Item
  const handleDelete=async(id)=>{
      try {
        const res= await axios.delete(process.env.NEXT_PUBLIC_DOMAIN+"/api/menuData/" + id)
        alert("data deleted Successfully")
        window.location.reload()
      } catch (error) {
        console.error(error)
      }
  }

  return <UserAuthContext.Provider value={{foodItem,loading,foodData, setFoodItem,submitFoodData, handleDelete}}>
    {children}
  </UserAuthContext.Provider>
}

export default ContextProvider;