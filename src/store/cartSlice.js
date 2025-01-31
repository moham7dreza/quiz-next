import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartAdapter.getInitialState({ totalQuantity: 0 }), // Normalized cart state
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.entities[action.payload.id];
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartAdapter.addOne(state, { ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
        },
        removeFromCart: (state, action) => {
            if (state.entities[action.payload]) {
                state.totalQuantity -= state.entities[action.payload].quantity;
                cartAdapter.removeOne(state, action.payload);
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;