import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    orderForm: false,
    cartCount: 0
  },
  reducers: {
    addItem(state, action) {
      // const item = action.payload;
      // const exists = state.cartItem.find((i) => i._id === item._id);
      // if (!exists) {
      state.cartItem.push({ ...action.payload, quantity: action.payload?.quantity || 1 });
      // state.cartCount = state.cartCount + 1
      // }
    },
    handleCartCount(state, action) {
      state.cartCount = state.cartCount + 1
    },
    updateQuantity(state, action) {
      const { index, quantity } = action.payload;

      // console.log("index is :", index);

      if (state.cartItem[index]) {
        state.cartItem[index].quantity = quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item._id !== id);
      state.cartCount = state.cartCount - 1
    },
    setCartItems(state, action) {
      state.cartItem = action.payload;
    },
    clearCart(state) {
      state.cartItem = [];
    },
    getOrderForm: (state) => {
      // console.log("order Form Convert");
      state.orderForm = !state.orderForm
    },
    // setCartCount

  },
});

export const { addItem, updateQuantity, handleCartCount, removeItem, setCartItems, clearCart, getOrderForm } = cartItemSlice.actions;
export default cartItemSlice.reducer;
