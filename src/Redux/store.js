import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import userIdReducer from "./reducers/userId";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";
import instructionReducer from "./reducers/instructions";
import pickupAddressReducer from "./reducers/pickupAddress"; // Make sure this matches

const store = configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        cart: cartReducer,
        instructions: instructionReducer,
        pickupAddress: pickupAddressReducer, // Correct key here
    },
});

export default store;
