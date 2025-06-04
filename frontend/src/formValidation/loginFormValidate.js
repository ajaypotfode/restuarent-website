// import { setFormErrors } from "@/redux/slice/uiSlice";

import { setFormErrors } from "../redux/slice/globalSlice";

export const loginFormValidate = (formData, dispatch) => {
    let newErrors = {};

    if (formData.email) {
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            return newErrors.email = "Invalid email format";
        }
    }

    if (!formData.email) {
        newErrors.email = "Email is Required!!";
    }


    if (!formData.password) {
        // if (!/^\d{10}$/.test(formData.password)) {
        newErrors.password = "Password is required!";
        // }
    }


    if (Object.keys(newErrors).length > 0) {
        dispatch(setFormErrors(newErrors));
        return false;
    }

    dispatch(setFormErrors({}));
    return true;
};