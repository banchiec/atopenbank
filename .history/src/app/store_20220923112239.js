import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../features/cart/cartSlice'
import userLogin'../features/product/productSlice'

export const store = configureStore({
	reducer: {
		product: productReducer,
		cart: cartReducer
	}
})