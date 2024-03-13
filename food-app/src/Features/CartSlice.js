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

    }
})

export default cartSlice.reducer