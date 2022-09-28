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
		pageFeedBackActive: false,
	},
	userLogin: {
		user: {},
		loadingUserLogin: false,
		succesUserLogin: false,
		errorUserLogin: false,
		passwordChanged : {
      passwordChangedSuccessfully: false,
      errorChangingPassword : false
		}
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
			state.activePage.pageFeedBackActive = true
			state.activePage.pageFormLoginActive = false
		},
		deniedForm: (state) => {
			state.deniedFormLogin = true
			state.acceptFormLogin = false
			state.activePage.pageInformationActive = true
			state.activePage.pageFormLoginActive = false
		},
		passwordChangedSuccessfully : (state) => {
		state.userLogin.passwordChanged.passwordChangedSuccessfully = true
		state.userLogin.passwordChanged.errorChangingPassword = false
		},
		errorChangingPassword: (state) => {
		state.userLogin.passwordChanged.errorChangingPassword = true
		state.userLogin.passwordChanged.passwordChangedSuccessfully = false
		},
		resetChangingPassword:  (state) => {
      state.acceptInformationLogin = false
      state.activePage.pageInformationActive = true
      state.activePage.pageFeedBackActive = false
      state.userLogin.user = {}
      state.userLogin.loadingUserLogin = false
      state.userLogin.succesUserLogin = false
      state.userLogin.errorUserLogin = false
      state.userLogin.passwordChanged.passwordChangedSuccessfully = false
      state.userLogin.passwordChanged.errorChangingPassword = false
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSetUserLogin.pending, (state) => {
			state.userLogin.loadingUserLogin = true
		})
		builder.addCase(fetchSetUserLogin.fulfilled, (state, action) => {
			state.userLogin.loadingUserLogin = false
			state.userLogin.succesUserLogin = true
			state.userLogin.user = action.payload
		})
		builder.addCase(fetchSetUserLogin.rejected, (state) => {
	      state.userLogin.errorUserLogin = false
		})
	}
})

export const { 
  acceptInformation, 
  deniedInformation, 
  acceptForm, 
  deniedForm, 
  errorChangingPassword, 
  passwordChangedSuccessfully,
  resetChangingPassword
} = userLoginSlice.actions

	export default userLoginSlice.reducer
