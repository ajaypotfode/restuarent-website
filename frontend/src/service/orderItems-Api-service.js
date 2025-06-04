import axios from "axios";
import token from "./accessToken-service";

export const getOrderItemAPI = async () => {
    // let data = JSON.stringify();
    // console.log(category);
    

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/get/order`,
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
        url: 'http://localhost:4000/api/add/order',
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
        url: `http://localhost:4000/api/delete/order/${id}`,
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

