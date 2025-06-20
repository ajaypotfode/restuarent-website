import axios from "axios";
import token from "./accessToken-service";

export const getOrderItemAPI = async () => {
    // let data = JSON.stringify();
    // console.log(category);
    

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/get/order`,
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

export const addOrderItemAPI = async (orderData) => {
    let data = JSON.stringify(orderData);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://restuarent-website.onrender.com/api/add/order',
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


export const deleteOrderItemAPI = async (id) => {
    // let data = JSON.stringify();

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `https://restuarent-website.onrender.com/api/delete/order/${id}`,
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

