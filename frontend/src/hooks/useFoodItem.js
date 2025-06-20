"use client"
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, submitFood, updateFoodItem, fetchFoodItems, deleteFoodItem, setFoodItem, filterByCategory, resetFoodItem, getOneFoodItem, setUpdateFoodData } from "../redux/slice/foodItemSlice";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { foodFormValidate } from "../formValidation/foodFormValidate";
import { setFormErrors } from "../redux/slice/globalSlice";
// import { updateFoodItem } from "../redux/slice/foodItemSlice";
// import { useState } from "react";

const UseFoodData = () => {
    const { newFoodData, foodItem, filterdData, updateFoodData } = useSelector((state) => state.foodItem);
    const { loading, error, formError, isHydrated } = useSelector((state) => state.globalComponent)
    const dispatch = useDispatch();
    const imageInputRef = useRef();
    const router = useRouter()
    // const [filterData, setFilterData] = useState()
    //   const [image, setImage]=useState("")

    const handleFoodItemData = (e) => {
        const { name, value } = e.target

        dispatch(setFoodItem({ ...newFoodData, [name]: value }))

        // Object.keys(formError).length
    };

    const handleUpdateFoodData = (e) => {
        const { name, value } = e.target

        dispatch(setUpdateFoodData({ ...updateFoodData, [name]: value }))
    }


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

    const submitFoodData = async (e) => {
        // e.preventDefault();
        e.preventDefault();

        if (foodFormValidate(newFoodData, dispatch)) {
            if (!newFoodData.image) {
                toast.info("wait for image Uploading!!")
                return;
            }

            const response = await dispatch(submitFood(newFoodData)).unwrap();
            if (response.success) {
                imageInputRef.current.value = "";
                toast.success("New Dish Added SuccessFully!!")
            }
        }
    };


    const getFoodItems = (type) => {
        dispatch(fetchFoodItems(type))
    };

    const getFoodByID = (foodId) => {
        dispatch(getOneFoodItem(foodId))
    }


    const resetCurrentFoodItem = async (e) => {
        e.preventDefault();

        if (foodFormValidate(updateFoodData, dispatch)) {
            const response = await dispatch(updateFoodItem(updateFoodData)).unwrap()
            if (response.success) {
                toast.success("food-item Updated Successfully!!!")
                router.push("/admin")
            }
        }
    }

    const removeFoodItem = (id) => {
        dispatch(deleteFoodItem(id))
    };


    const removeFormErrors = () => {
        dispatch(setFormErrors({}))
    }



    return {
        newFoodData,
        foodItem,
        filterdData,
        updateFoodData,
        handleFoodItemData,
        handleUpdateFoodData,
        uploadFoodImage,
        submitFoodData,
        getFoodItems,
        getFoodByID,
        removeFoodItem,
        // filterCategory,
        resetCurrentFoodItem,
        imageInputRef,
        loading,
        error,
        formError,
        isHydrated,
        removeFormErrors,
        // backToPage
    };
}

export default UseFoodData