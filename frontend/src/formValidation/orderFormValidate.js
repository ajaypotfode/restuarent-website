
import { setFormErrors } from "../redux/slice/globalSlice";

export const orderFormValidate = (formData, dispatch) => {
    // console.log("order Form validate");
    
    let newErrors = {};

    // console.log("order Form validate :",formData);
    if (!formData.name) {
        newErrors.name = "name is required";
    }

    if (formData.email) {
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
    }

    if (!formData.email) {
        newErrors.email = "Email is Required";
    }

    if (formData.phone) {
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Invalid Phone Number";
        }
    }

    if (!formData.phone) {
        newErrors.phone = "Phone Number is required ";
    }

    if (!formData.address) {
        newErrors.address = "Address iS required";
    }

    if (Object.keys(newErrors).length > 0) {
        dispatch(setFormErrors(newErrors));
        return false;
    }

    dispatch(setFormErrors({}));
    return true;
};