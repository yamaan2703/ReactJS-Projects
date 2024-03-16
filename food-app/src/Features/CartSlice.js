import { createSlice } from "@reduxjs/toolkit";
import { BurgerData } from "../Config/AppData"

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

          removeItem: (state, action) => {
            const itemToRemove = state.cart.find(
              (item) => item.id === action.payload
            );
            if (itemToRemove) {
              state.totalQuantity -= itemToRemove.quantity;
              state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
              state.cart = state.cart.filter((item) => item.id !== action.payload);
            }
          },
      
          increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },
        
          decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                if (item.quantity === 1) {
                  // Remove the item if quantity becomes 0
                  state.totalQuantity -= item.quantity;
                  state.totalPrice -= item.price * item.quantity;
                  return null; // Filter out this item
                } else {
                  return { ...item, quantity: item.quantity - 1 };
                }
              }
              return item;
            }).filter(Boolean); // Filter out null items
          },
          
    }
})

export const {
    addToCart,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity
  } = cartSlice.actions;
export default cartSlice.reducer