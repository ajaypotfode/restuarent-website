import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const setToken = async (token) => {
    const decoded = jwtDecode(token);
    const stringToken = JSON.stringify(token)
    const role = JSON.stringify(decoded.role)

    if (typeof window !== "undefined") {
        localStorage.setItem('token', stringToken)
        localStorage.setItem('role', role)
    }

    const response = await axios.post(process.env.NEXT_PUBLIC_SET_TOKEN_URL, { token })
    if (response.data.success) {
        window.location.href("/")
    }
}

export const removeToken = async () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_REMOVE_TOKEN_URL)

    if (response.data.success) {
        window.location.href("/login")
    }
    return response.data
}

