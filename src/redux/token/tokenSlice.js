import { createSlice } from "@reduxjs/toolkit";

// Initial Sate
let initialState = window.localStorage.getItem('token') || false;

export const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setToken: (state, action) => {
			if (action.payload === false) {
				window.localStorage.removeItem('token');
			} else {
				window.localStorage.setItem('token', action.payload);
			}
			return action.payload;
		}
	},
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
