import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

const initialState = {
    cart: [],
    items: productsData,
    totalQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }
    }
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
