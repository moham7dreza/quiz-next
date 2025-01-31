import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const itemAdapter = createEntityAdapter();

export const itemSlice = createSlice({
    name: "items",
    initialState: itemAdapter.getInitialState(),
    reducers: {
        setItems: (state, action) => {
            // console.log(action.payload)
            itemAdapter.setAll(state, action.payload)
        },
    },
});

export const { setItems } = itemSlice.actions;