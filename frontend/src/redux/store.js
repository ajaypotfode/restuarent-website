import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import foodItemReducer from './slice/foodItemSlice'
import cartItemReducer from './slice/cartItemSlice'
import orderItemReducer from './slice/orderSlice'
import globalReducer from './slice/globalSlice'

const Store = configureStore({
    reducer: {
        user: userReducer,
        foodItem: foodItemReducer,
        cartItem: cartItemReducer,
        orderItem: orderItemReducer,
        globalComponent: globalReducer
    }
})

export default Store