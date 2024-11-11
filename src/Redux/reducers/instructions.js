import { createSlice } from "@reduxjs/toolkit";
// import { products } from "../../Actions/products";

const initialState = {
	instructions: {},
};

const instructionSlice = createSlice({
	name: "instructions",
	initialState, //state
	reducers: {
		setInstructions(state, action) {
			console.log("payload", action.payload);
			state.instructions = action.payload;
		},
	},
});

export const { setInstructions } = instructionSlice.actions;
export default instructionSlice.reducer;
