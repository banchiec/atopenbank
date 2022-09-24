import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from '../features/cart/cartSlice'
import userLoginReducer from '../features/user/userLoginSlice'

export const store = configureStore({
	reducer: {
		product: userLoginReducer,
	},
})
