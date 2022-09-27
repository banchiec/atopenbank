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
	user: {},
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
			state.acceptFormLogin = false
			state.activePage.pageInformationActive = true
			state.activePage.pageFormLoginActive = false
		},
	},
	extraReducers: (builder) => {
		
	}
})

export const { acceptInformation, deniedInformation, acceptForm, deniedForm } =
	userLoginSlice.actions

export default userLoginSlice.reducer
