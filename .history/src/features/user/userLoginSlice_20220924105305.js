import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	acceptFormLogin: false,
	deniedFormLogin: false,
	activePage: {
		pageInformationActive: true,
		pageFormLoginActive: false,
	},
}

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		acceptInformation: (state) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
			state.activePage.pageInformationActive = false
			state.activePage.pageFormLoginActive = true
		},
		deniedInformation: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
		acceptForm: (state) => {
			state.acceptFormLogin = true
		},
		deniedForm: (state) => {
			state.deniedFormLogin = true
			state.pageInformationActive = true
			state.pageFormLoginActive = false
			state.acceptFormLogin = false
		},
	},
})

export const { acceptInformation, deniedInformation, acceptForm, deniedForm } =
	userLoginSlice.actions

export default userLoginSlice.reducer
