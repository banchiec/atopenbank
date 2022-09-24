import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	pageInformationActive: true,
	pageFormLoginActive: false,
	acceptFormLogin : false,
	deniedFormLogin: false,
}

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		acceptInformation: (state) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
			state.pageInformationActive = false
			state.pageFormLoginActive = true
		},
		deniedInformation: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
		a
	},
})

export const { acceptInformation, deniedInformation } = userLoginSlice.actions

export default userLoginSlice.reducer
