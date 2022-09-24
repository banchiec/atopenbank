import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	userLogin: {}
}

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		acceptInformationLogin: (state) => {
			console.log(state);
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
		},
		deniedInformationLogin: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
	},
})

export const { acceptInformation, deniedInformationLogin } = userLoginSlice.actions
export default userLoginSlice.reducer
