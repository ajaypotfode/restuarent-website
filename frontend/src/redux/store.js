import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import foodItemReducer from './slice/foodItemSlice'
import cartItemReducer from './slice/cartItemSlice'

const Store = configureStore({
    reducer: {
        user: userReducer,
        foodItem: foodItemReducer,
        cartItem: cartItemReducer
    }
})

export default Store