import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState, //state
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            console.log('user =',action.payload);
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;