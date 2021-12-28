import { configureStore } from "@reduxjs/toolkit";

// Slices
import tokenSlice from "./token/tokenSlice";

export default configureStore({
	reducer: {
		token: tokenSlice
	},
});
