import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartPrice: 0,
  },
  reducers: {
      addItem: (state, action) => {
      const isPresent = state.items.some(
        (item) =>
          item.itemId === action.payload.itemId &&
          item.itemName === action.payload.itemName
      );

      if (!isPresent) {
        state.items.push({ ...action.payload, itemCount: 1 });
        state.cartPrice += action.payload.itemPrice;
      } else {
        state.items.forEach((item) => {
          if (item.itemId === action.payload.itemId) {
            item.itemCount += 1;
            state.cartPrice += item.itemPrice;
          }
        });
      }
    },
    removeItem: (state, action) => {
      const updatedCart = state.items.map((item) => {
        if (item.itemId === action.payload) {
          if (item.itemCount >= 1) {
            item.itemCount -= 1;
            state.cartPrice -= item.itemPrice;
            if (item.itemCount === 0) {
              state.items = state.items.filter(
                (item) => item.itemId !== action.payload
              );
            }
          }
        }
        return item;
      });
    },
    clearCart: (state, action) => {
      state.items = [];
      state.cartPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;