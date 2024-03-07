import { createSlice } from "@reduxjs/toolkit";
import { BurgerData } from "../Config/AppData";

const initialState = {
    cart: [],
    items: BurgerData,
    totalQuantity: 0,
    totalPrice: 0, 
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (findIndex >= 0) {
              state.cart[findIndex].quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
          }     
    },
    // removeItem: (state, action) => {
    //     state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    // }
    removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.totalQuantity -= 1;
        state.totalPrice -= action.payload.price * action.payload.quantity; 
      }
      
})

export const { addToCart, removeItem} = cartSlice.actions
export default cartSlice.reducer