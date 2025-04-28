import { useSelector, useDispatch } from "react-redux";
import { uploadImage, submitFood, fetchFoodItems, deleteFoodItem, setFoodItem, filterByCategory, resetFoodItem } from "../store/slices/foodSlice";
import { useState } from "react";

const UseFoodItem = () => {
    const { foodItem, foodData, filterdData, } = useSelector((state) => state.foodItem);
    const dispatch = useDispatch();
    const imageInputRef = useRef();
    //   const [image, setImage]=useState("")

    const handleFoodItemData = (e) => {
        const { name, value } = e.target

        dispatch(setFoodItem({ foodItem, [name]: value }))
    };

    const uploadFoodImage = (e) => {
        const image = e.target.files[0];
        if (image) {
            dispatch(uploadImage(image))
        }
    };

    // const handleImageChange=(e)=>{
    //     const image = e.target.files[0];
    //     if (image) {
    //       await uploadFoodImage(image);
    //     }
    // }

    const submitFoodData = () => {
        e.preventDefault();
        if (!foodItem.image) {
            alert("Upload Image First");
            return;
        }
        dispatch(submitFood(foodItem));
        imageInputRef.current.value = "";
    };


    const getFoodItems = () => {
        dispatch(fetchFoodItems())
    };

    const removeFoodItem = (id) => {
        dispatch(deleteFoodItem(id))
    };

    const filterCategory = (type) => {
        dispatch(filterByCategory(type))
    };

    // const resetCurrentFoodItem = () => dispatch(resetFoodItem());

    return {
        foodItem,
        foodData,
        filterdData,
        handleFoodItemData,
        uploadFoodImage,
        submitFoodData,
        getFoodItems,
        removeFoodItem,
        filterCategory,
        resetCurrentFoodItem,
        imageInputRef
    };
}

export default UseFoodItem