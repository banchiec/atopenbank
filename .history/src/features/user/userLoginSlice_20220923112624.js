import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	user
}

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
