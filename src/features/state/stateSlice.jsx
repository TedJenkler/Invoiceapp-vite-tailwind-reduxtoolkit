import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

const initialState = {
    toggleMode: "light",
    filter: "all",
    data
};

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filter = action.payload;
        },
        markpaid: (state, action) => {
            const { index } = action.payload;
            state.data[index].status = "paid";
        },
        remove: (state, action) => {
            const { index } = action.payload;
            state.data.splice(index, 1);
        },
        edit: (state, action) => {
            const { index, clientAddressCity, clientAddressCountry, clientAddressPostCode, clientAddressStreet, clientEmail, clientName, createdAt, description, id, items, paymentDue, paymentTerms, senderAddressCity, senderAddressCountry, senderAddressPostCode, senderAddressStreet, status, total} = action.payload;
            state.data[index] = {
                id,
                createdAt,
                paymentDue,
                description,
                paymentTerms,
                senderAddress: {
                    street: senderAddressStreet,
                    city: senderAddressCity,
                    postCode: senderAddressPostCode,
                    country: senderAddressCountry
                },
                clientAddress: {
                    street: clientAddressStreet,
                    city: clientAddressCity,
                    postCode: clientAddressPostCode,
                    country: clientAddressCountry
                },
                clientEmail,
                clientName,
                items,
                status,
                total
            };
        },
        add: (state,action) => {
            const { clientAddressCity, clientAddressCountry, clientAddressPostCode, clientAddressStreet, clientEmail, clientName, createdAt, description, id, items, paymentDue, paymentTerms, senderAddressCity, senderAddressCountry, senderAddressPostCode, senderAddressStreet, status, total} = action.payload;
            state.data.push({clientAddressCity: clientAddressCity, clientAddressCountry: clientAddressCountry, clientAddressPostCode: clientAddressPostCode, clientAddressStreet: clientAddressStreet, clientEmail: clientEmail, clientName: clientName, createdAt: createdAt, description: description, id: id, items: items, paymentDue: paymentDue, paymentTerms: paymentTerms, senderAddressCity: senderAddressCity, senderAddressCountry: senderAddressCountry, senderAddressPostCode: senderAddressPostCode, senderAddressStreet: senderAddressStreet, status: status, total: total})
        },
        toggledarklight: (state) => {
            if(state.toggleMode === "light"){
                state.toggleMode = "dark"
            }else {
                state.toggleMode = "light"
            }
        }
    }
});

export const { filter, remove, markpaid, edit, add, toggledarklight } = stateSlice.actions;

export default stateSlice.reducer;
