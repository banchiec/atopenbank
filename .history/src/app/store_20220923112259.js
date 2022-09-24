import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../features/cart/cartSlice'
import userLoginReducer from '../features/user'

export const store = configureStore({
	reducer: {
		product: userLoginReducer,
	}
})