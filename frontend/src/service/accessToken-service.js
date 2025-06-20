import axios from "axios"
import { jwtDecode } from "jwt-decode"

let token
if (typeof window !== "undefined") {
    token = localStorage.getItem("restroToken");
    token = token ? JSON.parse(token) : null;
}

export const setToken = async (token) => {
    const decoded = jwtDecode(token);
    
    const restroToken = JSON.stringify(token)

    const role = JSON.stringify(decoded.role)

    if (typeof window !== "undefined") {
        localStorage.setItem('restroToken', restroToken)
        localStorage.setItem('role', role)
    }

    const response = await axios.post(process.env.NEXT_PUBLIC_SET_TOKEN_URL, { restroToken })

// console.log("set Token Response is :",response);



    if (response.data.success) {
        // console.log("set-token response is :", response.data);
        window.location.href = "/";
    }
}

export const removeToken = async () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("restroToken")
        localStorage.removeItem("role")
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_REMOVE_TOKEN_URL)

    if (response.data.success) {
        window.location.href = "/login"
    }
    return response.data
}

export default token