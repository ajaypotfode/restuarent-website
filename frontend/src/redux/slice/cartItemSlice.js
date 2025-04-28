import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const exists = state.cartItem.find((i) => i._id === item._id);
      if (!exists) {
        state.cartItem.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    updateQuantity(state, action) {
      const { index, quantity } = action.payload;
      if (state.cartItem[index]) {
        state.cartItem[index].quantity = quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item._id !== id);
    },
    setCartItems(state, action) {
      state.cartItem = action.payload;
    },
    clearCart(state) {
      state.cartItem = [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, setCartItems, clearCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;
