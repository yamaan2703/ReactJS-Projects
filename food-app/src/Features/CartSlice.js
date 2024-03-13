import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findIndex = state.cart.findIndex(
              (item) => item.id === action.payload.id
            );
            if (findIndex >= 0) {
              state.cart[findIndex].quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice = state.cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
          },
    }
})

export const {
    addToCart,
  } = cartSlice.actions;
export default cartSlice.reducer