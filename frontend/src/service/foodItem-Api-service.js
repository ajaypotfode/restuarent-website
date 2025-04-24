import axios from "axios";

export const getFootItemAPI = async () => {
    // let data = JSON.stringify();

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/api/get/foodItem',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`   
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODBhMjYyOGNjNmQ1YzQ3YzEwOTBhODQiLCJpYXQiOjE3NDU0OTU3MDYsImV4cCI6MTc0NTQ5OTMwNn0.1SShT-G1uHKRr_gDwx-6cfFuWSHyAkoUjzy319PtjDE'
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

export const addFootItemAPI = async (foodData) => {
    let data = JSON.stringify(foodData);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/api/add/foodItem',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`   
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

export const updateFootItemAPI = async (foodData, id) => {
    let data = JSON.stringify(foodData);

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/update/foodItem/${id}`,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`   
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

export const deleteFootItemAPI = async (id) => {
    // let data = JSON.stringify();

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/delete/foodItem/${id}`,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`   
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


export const getOneFootItemAPI = async (id) => {
    // let data = JSON.stringify();

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/get/foodItem/${id}`,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`   
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


