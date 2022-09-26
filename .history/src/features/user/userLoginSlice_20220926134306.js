import { createSlice } from '@reduxjs/toolkit'
import { fetchSetUserLogin } from './api/userLoginApi'

const initialState = {
	acceptInformationLogin: false,
	deniedInformationLogin: false,
	acceptFormLogin: false,
	deniedFormLogin: false,
	activePage: {
		pageInformationActive: true,
		pageFormLoginActive: false,
	},
	userLogin: {
		user: {},
		loadingUserLogin: false,
		succesUserLogin: false,
		errorUserLogin: false,
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
			state.acceptFormLogin = false
			state.activePage.pageInformationActive = true
			state.activePage.pageFormLoginActive = false
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSetUserLogin.pending, (state) => {
			state.userLogin.loadingUserLogin = true
		})
		builder.addCase(fetchSetUserLogin.fulfilled, (state, action) => {
			state.userLogin.loadingUserLogin = false,
			state.userLogin.succesUserLogin = true,
			state.userLogin.user = action.payload
		}),
	},
})

export const { acceptInformation, deniedInformation, acceptForm, deniedForm } =
	userLoginSlice.actions

export default userLoginSlice.reducer
