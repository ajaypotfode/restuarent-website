import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addOrderItemAPI, deleteOrderItemAPI, getOrderItemAPI } from "../../service/orderItems-Api-service";
// import { addFootItemAPI, deleteFootItemAPI, getFootItemAPI } from "../../service/foodItem-Api-service";

export const submitOrder = createAsyncThunk(
    "order/submitOrder",
    async (orderData, { rejectWithValue }) => {
        try {
            const response = await addOrderItemAPI(orderData);

            if (!response.success) {
                return rejectWithValue(response)
            }

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchOrderItems = createAsyncThunk(
    "order/fetchOrderItems",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getOrderItemAPI()
            // console.log(response);

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteOrderItem = createAsyncThunk(
    "order/deleteOrderItem",
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await deleteOrderItemAPI(orderId)

            if (!response.success) {
                return rejectWithValue(response)
            }

            return response.result?._id
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const orderItemSlice = createSlice({
    name: "order",
    initialState: {
        orderItem: [],
        newOrderData: {}
    },
    reducers: {
        setOrderItem(state, action) {
            state.newOrderData = action.payload;
        },
        resetFoodItem(state) {
            state.orderItem = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitOrder.fulfilled, (state, action) => {
                console.log("success Fully Added Order data :", action.payload.result);

                state.orderItem.push(action.payload.result);
                state.newOrderData = {}
                // state.loading = false;
            })
            .addCase(submitOrder.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })
            .addCase(fetchOrderItems.fulfilled, (state, action) => {
                state.orderItem = action.payload.result;
                // state.loading = false;
            })
            .addCase(fetchOrderItems.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })
            .addCase(deleteOrderItem.fulfilled, (state, action) => {
                console.log("foode item in deleted slice :", action.payload);

                state.orderItem = state.orderItem.filter(item => item._id !== action.payload);
                // state.loading = false;
            })
            .addCase(deleteOrderItem.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })
    }
});

export const { setOrderItem, resetFoodItem } = orderItemSlice.actions;
export default orderItemSlice.reducer;
