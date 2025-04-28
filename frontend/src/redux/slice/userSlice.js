// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUserAPI, loginUserAPI } from "../../service/user-Api-service"
import { setToken } from "../../service/accessToken-service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signupUser = createAsyncThunk("user/signup", async (signupData, { rejectWithValue }) => {
    try {
        const response = await addUserAPI(signupData);

        if (!response.success) {
            return rejectWithValue(response)
        }
        return response
    } catch (error) {
        return rejectWithValue(error.response?.data || "failed to Sign Up User!!")
    }
})


export const loginUser = createAsyncThunk("user/login", async (loginData, { rejectWithValue }) => {
    try {
        const response = await loginUserAPI(loginData);

        if (!response.success) {
            return rejectWithValue(response)
        }

        await setToken(response.token)

        return response
    } catch (error) {
        return rejectWithValue(error.response?.data || "failed to login User");
    }
})


export const logoutUser = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await removeToken()
        return response
    } catch (error) {
        // console.log("failed to logout User");
        return rejectWithValue(error.response?.data || "failed to logout User");
    }
})



const initialState = {
    signUpData: {},
    loginData: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getSignUpData: (state, action) => {
            state.signUpData = action.payload
        },
        getLoginData: (state, action) => {
            state.loginData = action.payload
        }
    },
    extraReducers: {

    }

})

export const { getLoginData, getSignUpData } = userSlice.actions

export default userSlice.reducer