// hooks/useCart.js
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateQuantity, removeItem, setCartItems, clearCart } from "../store/slices/cartSlice";

const UseCartItem = () => {
    const { cartItem } = useSelector((state) => state.cartItem);
    const dispatch = useDispatch();

    const totalPrice = cartItem.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const addCartItems = (menu) => dispatch(addItem(menu));
    const handleQuantityChange = (index, value) => dispatch(updateQuantity({ index, quantity: value }));
    const removeCartItems = (id) => dispatch(removeItem(id));
    const setAllCartItems = (items) => dispatch(setCartItems(items));
    const clearAllCartItems = () => dispatch(clearCart());

    return {
        cartItem,
        totalPrice,
        addCartItems,
        handleQuantityChange,
        removeCartItems,
        setAllCartItems,
        clearAllCartItems,
    };
}


export default UseCartItem