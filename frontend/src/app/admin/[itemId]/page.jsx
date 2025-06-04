"use client";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UseFoodData from '../../../hooks/useFoodItem';
// import { useRouter } from 'next/router';

const UpdateMenu = ({ params }) => {
  const id = params.itemId
  const { resetCurrentFoodItem, handleFoodItemData, handleUpdateFoodData, newFoodData, updateFoodData, getFoodByID,formError } = UseFoodData()

  // const context = useContext(UserAuthContext);
  // const { router, setUpdatedData, updatedData}=useFoodData()
  // const { loading,setLoading  }= context


  useEffect(() => {
    getFoodByID(id)
  }, [])

  return (
    <div className="dashboard">
      <div className="add-form">
        <h1 className="heading">Add <span>User</span></h1>
        <form onSubmit={resetCurrentFoodItem}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updateFoodData.name || ""}
            onChange={handleUpdateFoodData}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={updateFoodData.description || ""}
            onChange={handleUpdateFoodData}
          />
          <label>Type:</label>
          <select
            name="type"
            onChange={handleUpdateFoodData}
            value={updateFoodData.type || ""}
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
            value={updateFoodData.price || ""}
            onChange={handleUpdateFoodData}
          />
          {/* {
            loading && <p className="loader">updatedData is uploading...</p>
          } */}
          <button type="submit" className="btn">update Data </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;
// export updateData 