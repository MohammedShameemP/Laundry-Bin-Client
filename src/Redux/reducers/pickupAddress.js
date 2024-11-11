// In ../Redux/reducers/pickupaddress.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pickupAddress: {},
};

const pickupAddressSlice = createSlice({
    name: "pickupAddress",
    initialState,
    reducers: {
        setPickupAddress(state, action) {
            state.pickupAddress = action.payload;
        },
    },
});

export const { setPickupAddress } = pickupAddressSlice.actions;
export default pickupAddressSlice.reducer;
