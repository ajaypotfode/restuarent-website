"use client";
import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from "@/context/userContext";
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const UpdateMenu = ({ params }) => {
  const router = useRouter()
  const [data, setData] = useState({})
  const id = params.itemId

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/menuData/"+id)
        const result = await res.data
        setData(result)
        // console.log(data);
      } catch (error) {
        console.log("error");
      }
    })()
  }, [])

  const updateData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put("http://localhost:3000/api/menuData/" + id, data)
      alert("data updated successfully")
      router.push('/admin');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="dashboard">
    <div className="add-form">
      <h1 className="heading">Add <span>User</span></h1>
      <form onSubmit={updateData}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <label>Type:</label>
        <select
          name="type"
          onChange={(e) => setData({ ...data, type: e.target.value })}
          value={data.type}
        >
          <option className="option" value="" selected disabled>select one</option>
          <option className="option" value="Dinner">Dinner</option>
          <option className="option" value="Lunch">Lunch</option>
          <option className="option" value="Breakfast">Breakfast</option>
        </select>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        {/* <label>Image:</label> */}
        {/* <input
          type="file"
          name="image"
          onChange={(e) => setFoodItem({ ...foodItem, image: e.target.files[0] })}
        /> */}
        {/* {
          loading && <p className="loader">data is uploading...</p>
        } */}
        <button type="submit" className="btn">update Data </button>
      </form>
    </div>
    </div>
  );
};

export default UpdateMenu;