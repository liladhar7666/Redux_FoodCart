import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
    },
    reducers: {
        addToCart: (state, action) => {
           state.cart.push(action.payload);
        },
        removeFromCart : (state , action) => {
           state.cart.filter((item) => item.id ) !== 
        },
    },
})