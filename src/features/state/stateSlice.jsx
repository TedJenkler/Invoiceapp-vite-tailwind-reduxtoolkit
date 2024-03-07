import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json"

const initialState = {
    data
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        markpaid: (state, action) => {
            const { index } = action.payload;
            state.data[index].status = "paid"
        },
        remove: (state, action) => {
            const { index } = action.payload;
            state.data.splice(index, 1);
        }
    }
})

export const { remove, markpaid } = stateSlice.actions

export default stateSlice.reducer