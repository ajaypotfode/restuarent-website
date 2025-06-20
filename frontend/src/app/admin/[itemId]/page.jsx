"use client";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UseFoodData from '../../../hooks/useFoodItem';
// import { useRouter } from 'next/router';

const UpdateMenu = ({ params }) => {
  const id = params.itemId
  const { resetCurrentFoodItem, handleUpdateFoodData, updateFoodData, getFoodByID, formError, removeFormErrors } = UseFoodData()


  useEffect(() => {
    getFoodByID(id)
  }, [])

  return (
    <div className="dashboard">
      <div className="add-food-form" onClick={removeFormErrors}>
        <h1 className="heading">Update <span>Food</span></h1>
        <div className="add-food-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={resetCurrentFoodItem} >
            <div className="input-wrapper">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={updateFoodData.name || ""}
                onChange={handleUpdateFoodData}

              />
              {formError.name && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.name}</p>}
            </div>


            <div className="input-wrapper">
              <label>Description:</label>
              <textarea
                name="description"
                // description
                value={updateFoodData.description || ""}
                onChange={handleUpdateFoodData}
              />
              {<p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.description}</p>}
            </div>

            <div className="input-wrapper">
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
              {formError.type && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.type}</p>}
            </div>


            <div className="input-wrapper">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={updateFoodData.price || ""}
                onChange={handleUpdateFoodData}
              />
              {formError.price && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.price}</p>}
            </div>

            {/* {
              loading && <p className="loader">data is uploading...</p>
            } */}
            <button type="submit" className="btn">Update Data </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;
// export updateData 