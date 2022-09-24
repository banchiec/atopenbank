import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	pageInformationActive: true,
	pageFormLoginActive: false
}

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		acceptInformation: (state) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
		},
		deniedInformation: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
	},
})

export const { acceptInformation, deniedInformation } = userLoginSlice.actions

export default userLoginSlice.reducer
