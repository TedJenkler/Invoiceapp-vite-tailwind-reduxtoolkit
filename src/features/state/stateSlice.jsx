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
        },
        edit: (state, action) => {
            const { index, clientAddressCity, clientAddressCountry, clientAddressPostCode, clientAddressStreet, clientEmail, clientName, createdAt, description, id, items, paymentDue, paymentTerms, senderAddressCity, senderAddressCountry, senderAddressPostCode, senderAddressStreet, status, total} = action.payload;
            state.data[index] = {}
        },
    }
})

export const { remove, markpaid, edit } = stateSlice.actions

export default stateSlice.reducer