import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const itemAdapter = createEntityAdapter();

export const itemSlice = createSlice({
    name: "items",
    initialState: itemAdapter.getInitialState(),
    reducers: {
        setItems: itemAdapter.setAll,
    },
});

export const { setItems } = itemSlice.actions;