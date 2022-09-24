import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	userLogin: {
		id: 1,
		name: 'pepe',
	},
}

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState: initialState,
	reducers: {
		acceptInformation: (state, action) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
			state.user = action.payload
		},
		deniedInformation: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
	},
})

export const { acceptInformation, deniedInformation } = userLoginSlice.actions

export default userLoginSlice.reducer
