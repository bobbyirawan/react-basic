import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addCart(state, action) {
      const item = state.data.find((item) => item.id === action.payload.id);
      item ? item.qty++ : state.data.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
