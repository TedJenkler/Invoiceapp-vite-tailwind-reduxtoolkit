import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json"

const initialState = {
    state: data
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        test: (state) => {

        }
    }
})

export const { test } = stateSlice.actions

export default stateSlice.reducer