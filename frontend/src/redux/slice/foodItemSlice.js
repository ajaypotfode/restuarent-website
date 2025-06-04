// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { addUserAPI, loginUserAPI } from "../../service/user-Api-service"
// import { setToken } from "../../service/accessToken-service";
// import { addFootItemAPI, deleteFootItemAPI, getFootItemAPI, updateFootItemAPI } from "../../service/foodItem-Api-service";


// export const fetchFoodItem = createAsyncThunk("foodItem/fetch", async (_, { rejectWithValue }) => {
//     try {
//         const response = await getFootItemAPI()

//         return response
//     } catch (error) {
//         return rejectWithValue(error.response?.data || "failed to fetch Data!!")
//     }
// })


// export const addFodItem = createAsyncThunk("foodItem/add", async (foodData, { rejectWithValue }) => {
//     try {
//         const response = await addFootItemAPI(foodData);

//         if (!response.success) {
//             return rejectWithValue(response)
//         }

//         return response
//     } catch (error) {
//         return rejectWithValue(error.response?.data || "failed to Add FoodItem!!");
//     }
// })


// export const updateFootItem = createAsyncThunk("foodItem/update", async (updateFood, { rejectWithValue }) => {
//     try {
//         const response = await updateFootItemAPI(updateFood)

//         if (!response.success) {
//             return rejectWithValue(response)
//         }

//         return response
//     } catch (error) {
//         return rejectWithValue(error.response?.data || "failed to Update User");
//     }
// })

// export const deleteFootItem = createAsyncThunk("foodItem/update", async (foodId, { rejectWithValue }) => {
//     try {
//         const response = await deleteFootItemAPI(foodId)

//         if (!response.success) {
//             return rejectWithValue(response)
//         }

//         return response
//     } catch (error) {
//         return rejectWithValue(error.response?.data || "failed to Update User");
//     }
// })



// const initialState = {
//     foodItems: [],
//     newFoodData: {},
// }

// const foodItemSlice = createSlice({
//     name: "foodItem",
//     initialState,
//     reducers: {
//         addFoodData: (state, action) => {
//             state.newFoodData = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchFoodItem.fulfilled, (state, action) => {
//                 state.foodItems = action.payload
//             })
//     }

// })

// export const { addFoodData } = foodItemSlice.actions

// export default foodItemSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../../utils/firebase";
import { addFoodItemAPI, deleteFoodItemAPI, getFoodItemAPI, getOneFoodItemAPI, updateFoodItemAPI } from "../../service/foodItem-Api-service";
// import { addFootItemAPI, deleteFootItemAPI, getFootItemAPI } from "../../service/foodItem-Api-service";

// Thunks (for async operations)

export const uploadImage = createAsyncThunk(
    "food/uploadImage",
    async (image, { rejectWithValue }) => {
        try {
            const imageRef = ref(imageDb, `images/${image.name}`);
            const metadata = { contentType: image.type };
            const uploadResult = await uploadBytes(imageRef, image, metadata);
            return await getDownloadURL(uploadResult.ref);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const submitFood = createAsyncThunk(
    "food/submitFood",
    async (foodData, { rejectWithValue }) => {
        try {
            const response = await addFoodItemAPI(foodData);

            if (!response.success) {
                return rejectWithValue(response)
            }

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchFoodItems = createAsyncThunk(
    "food/fetchFoodItems",
    async (category, { rejectWithValue }) => {
        try {
            const response = await getFoodItemAPI(category)
            // console.log(response);

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteFoodItem = createAsyncThunk(
    "food/deleteFoodItem",
    async (foodId, { rejectWithValue }) => {
        try {
            const response = await deleteFoodItemAPI(foodId)

            if (!response.success) {
                return rejectWithValue(response)
            }

            return response.result?._id
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const updateFoodItem = createAsyncThunk(
    "food/updateFoodItem",
    async (updateData, { rejectWithValue }) => {
        try {
            const response = await updateFoodItemAPI(updateData)

            if (!response.success) {
                return rejectWithValue(response)
            }

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getOneFoodItem = createAsyncThunk(
    "food/getOneFoodItem",
    async (foodId, { rejectWithValue }) => {
        try {
            const response = await getOneFoodItemAPI(foodId)

            if (!response.success) {
                return rejectWithValue(response)
            }
            console.log("food Item by id :", response);

            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const foodItemSlice = createSlice({
    name: "food",
    initialState: {
        foodItem: [],
        newFoodData: {},
        updateFoodData: {},
        filterdData: [],
        // loading: false,
        // error: null,
    },
    reducers: {
        setFoodItem(state, action) {
            state.newFoodData = action.payload;
        },
        setUpdateFoodData(state, action) {
            state.updateFoodData = action.payload
        },
        filterByCategory(state, action) {
            state.filterdData = state.foodItem.filter(item => item.type === action.payload);
        },
        resetFoodItem(state) {
            state.foodItem = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                // state.loading = true;
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                // console.log("image i slice:",action.payload);

                state.newFoodData.image = action.payload;
                // state.loading = false;
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.newFoodData.image = '/image.png'
            })

            .addCase(submitFood.pending, (state) => {
                // state.loading = true;
            })
            .addCase(submitFood.fulfilled, (state, action) => {

                state.foodItem.push(action.payload.result);
                state.newFoodData = {}
                // state.loading = false;
            })
            .addCase(submitFood.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })

            .addCase(fetchFoodItems.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchFoodItems.fulfilled, (state, action) => {
                state.foodItem = action.payload.result;
                // state.loading = false;
            })
            .addCase(fetchFoodItems.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })

            .addCase(deleteFoodItem.pending, (state) => {
                // state.loading = true;
            })
            .addCase(deleteFoodItem.fulfilled, (state, action) => {
                console.log("foode item in slice :", action.payload);

                state.foodItem = state.foodItem.filter(item => item._id !== action.payload);
                // state.loading = false;
            })
            .addCase(deleteFoodItem.rejected, (state, action) => {
                // state.error = action.payload;
                // state.loading = false;
            })
            .addCase(updateFoodItem.fulfilled, (state, action) => {
                state.updateFoodData = {}
            })
            .addCase(getOneFoodItem.fulfilled, (state, action) => {
                state.updateFoodData = action.payload?.result
            })
    }
});

export const { setFoodItem, setUpdateFoodData, filterByCategory, resetFoodItem } = foodItemSlice.actions;
export default foodItemSlice.reducer;
