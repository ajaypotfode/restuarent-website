import { createSlice, isPending, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import token from "../../service/accessToken-service";

const initialState = {
    loading: {},
    formError: {},
    error: {},
    isHydrated: false,
    isToken: null,
    role: null
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setFormErrors: (state, action) => {
            // console.log("form error is :",action.payload);

            state.formError = action.payload
        },
        setIsHydrated: (state) => {
            state.isHydrated = true
        },
        setIsToken: (state, action) => {
            state.isToken = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state, action) => {
                const key = action.type.replace("/pending", "");
                // console.log("pending image upload :",key);

                state.loading[key] = true;
                delete state.error[key];
            })

            .addMatcher(isFulfilled, (state, action) => {
                const key = action.type.replace("/fulfilled", "");
                //  console.log("auth login message is in success :",action.payload);
                state.loading[key] = false
                delete state.error[key];
                state.formError = {}
            })

            .addMatcher(isRejected, (state, action) => {
                const key = action.type.replace("/rejected", "");
                state.loading[key] = false;
                state.formError = {}
                toast.error(`${action.payload?.message}`)

            })
    }
})

export const { setFormErrors, setIsHydrated, setIsToken,setRole } = globalSlice.actions;

export default globalSlice.reducer