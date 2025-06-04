
import { setFormErrors } from "../redux/slice/globalSlice";

export const foodFormValidate = (formData, dispatch) => {
    let newErrors = {};

    if (!formData.name) {
        newErrors.name = "dish name is required";
    }

    if (!formData.description) {
        newErrors.description = "description is required!";
    }

    if (!formData.type) {
        newErrors.type = "type is required!";
    }

    if (!formData.price) {
        newErrors.price = "price is required!";
    }

    if (!formData.image) {
        newErrors.image = "image is required!";
    }


    if (Object.keys(newErrors).length > 0) {
        dispatch(setFormErrors(newErrors));
        return false;
    }

    dispatch(setFormErrors({}));
    return true;
};