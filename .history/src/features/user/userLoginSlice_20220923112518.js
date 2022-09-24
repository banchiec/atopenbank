import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
}

// export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
// 	return axios
// 		.get('https://front-test-api.herokuapp.com/api/product')
// 		.then((response) => response.data.map((product) => product))
// })

// export const fetchProductDetail = createAsyncThunk(
// 	'productDetails/fetchProductDetail',
// 	(id) => {
// 		return axios
// 			.get(`https://front-test-api.herokuapp.com/api/product/${id}`)
// 			.then((response) => response.data)
// 	}
// )
export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		acceptInformationLogin: (state) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
		},
		deniedInformationLogin: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
	},
})

export const { acceptInformationLogin, deniedInformationLogin } = userLoginSlice.actions
export default userLoginSlice.reducer
