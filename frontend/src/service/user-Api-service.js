import axios from "axios";

export const addUserAPI = async (userData) => {
    let data = JSON.stringify(userData);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/auth/add/user`,
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

export const loginUserAPI = async (loginData) => {
    let data = JSON.stringify(loginData);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/auth/login/user`,
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

