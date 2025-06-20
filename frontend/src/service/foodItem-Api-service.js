import axios from "axios";
import token from "./accessToken-service";

export const getFoodItemAPI = async (category) => {
    // let data = JSON.stringify();
    console.log(category);
    

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/get/foodItem?category=${category}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        // data: data
    };
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const addFoodItemAPI = async (foodData) => {
    let data = JSON.stringify(foodData);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://restuarent-website.onrender.com/api/add/foodItem',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const updateFoodItemAPI = async (foodData) => {   /*8261883086 amit gavas*/
    let data = JSON.stringify(foodData);

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/update/foodItem/${foodData._id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const deleteFoodItemAPI = async (id) => {
    // let data = JSON.stringify();

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/delete/foodItem/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        // data: data
    };
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export const getOneFoodItemAPI = async (id) => {
    console.log("id is :", id);

    // let data = JSON.stringify();

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/get/foodItem/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        // data: data
    };
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


