"use client";

import { SmallSpinner } from "../../components/Loaders";

const AddMenu = ({
  newFoodData,
  handleFoodItemData,
  uploadFoodImage,
  submitFoodData,
  imageInputRef,
  loading,
  formError,
removeFormErrors }) => {

  // const { resetCurrentFoodItem, handleFoodItemData, newFoodData, getFoodByID } = UseFoodData()

  // const context = useContext(UserAuthContext);
  // const { submitFoodData, foodItem, loading, setFoodItem, imageInputRef } = context

  return (
    <div className="add-food-form" onClick={removeFormErrors}>
      <h1 className="heading">Add <span>Food</span></h1>
      <div className="add-food-form-wrapper" onClick={(e)=>e.stopPropagation()}>
        <form onSubmit={submitFoodData} >
        <div className="input-wrapper">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newFoodData.name || ""}
            onChange={handleFoodItemData}
            
          />
          {formError.name && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.name}</p>}
        </div>


        <div className="input-wrapper">
          <label>Description:</label>
          <textarea
            name="description"
            value={newFoodData.description|| ""}
            onChange={handleFoodItemData}
          />
          {<p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.description}</p>}
        </div>

        <div className="input-wrapper">
          <label>Type:</label>
          <select
            name="type"
            value={newFoodData.type || ""}
            onChange={handleFoodItemData}
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
            value={newFoodData.price || ""}
            onChange={handleFoodItemData}
          />
          {formError.price && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.price}</p>}
        </div>

        <div className="input-wrapper">
          <label>Image:</label>
          <div className="image-input">
            <input
              type="file"
              name="image"
              ref={imageInputRef}
              onChange={uploadFoodImage}
            />
            {
              loading["food/uploadImage"] && <SmallSpinner />
            }
          </div>
          {formError.image && <p style={{ color: "red", margin: "0px", fontSize: '1.5rem' }} >{formError.image}</p>}
        </div>

        {/* {
          loading && <p className="loader">data is uploading...</p>
        } */}
        <button type="submit" className="btn">Add Data </button>
      </form>
      </div>
    </div>
  );
};

export default AddMenu;
