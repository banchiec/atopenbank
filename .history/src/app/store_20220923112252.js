import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../features/cart/cartSlice'
import userLoginReducer from '../features/product/productSlice'

export const store = configureStore({
	reducer: {
		product: userLoginReducer,
	}
})