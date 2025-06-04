"use client"
// hooks/useCart.js
import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, getOrderForm, handleCartCount, removeItem, setCartItems, updateQuantity } from "../redux/slice/cartItemSlice";
import { submitOrder } from "../redux/slice/orderSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { orderFormValidate } from "../formValidation/orderFormValidate";
import { setFormErrors } from "../redux/slice/globalSlice";
// import { addItem, updateQuantity, removeItem, setCartItems, clearCart } from "../store/slices/cartSlice";

const UseCartItem = () => {
    const { cartItem, orderForm, cartCount } = useSelector((state) => state.cartItem);
    const { loading, error, formError } = useSelector((state) => state.globalComponent)
    const dispatch = useDispatch();

    const [orderDetails, setOrderDetails] = useState({})

    // const [cartCaount, setCartCount]=useState(0)

    const totalPrice = cartItem.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const addCartItems = (menu) => {
        // const item =;
        const exists = cartItem.find((i) => i._id === menu._id);
        if (!exists) {
            dispatch(addItem(menu));
            dispatch(handleCartCount())
            return
            // state.cartItem.push({ ...item, quantity: item.quantity || 1 });
            // state.cartCount = state.cartCount + 1
        }
        toast.error("You already Choose This Dish!!")

        // dispatch(addItem(menu));
    }


    const handleQuantityChange = (index, value) => {
        dispatch(updateQuantity({ index, quantity: value }));
    }
    const removeCartItems = (id) => {
        dispatch(removeItem(id));
    }

    const setAllCartItems = (items) => {
        dispatch(setCartItems(items));
    }

    const clearAllCartItems = () => {
        dispatch(clearCart());
    }

    const handleOrderForm = () => {
        // console.log("order Form Convert");
        dispatch(setFormErrors({}))
        dispatch(getOrderForm())
    };

    const getCartItemTotal = (orderItem) => {
        const total = orderItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total
    }


    const handlePlaceOrder = async (e) => {
        e.preventDefault()

        if (orderFormValidate(orderDetails, dispatch)) {
            const response = await dispatch(submitOrder(cartItem)).unwrap()

            if (response.success) {
                dispatch(getOrderForm())
                toast.success("Order Placed Successfully!!!")
            }
        }
    }


    return {
        cartItem,
        orderForm,
        totalPrice,
        addCartItems,
        handleQuantityChange,
        removeCartItems,
        setAllCartItems,
        clearAllCartItems,
        handleOrderForm,
        getCartItemTotal,
        handlePlaceOrder,
        loading,
        error,
        formError,
        cartCount,
        orderDetails,
        setOrderDetails
        // cartCaount,
        // setCartCount
    };
}


export default UseCartItem