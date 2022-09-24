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
		acceptInformation: (state ) => {
			state.acceptInformationLogin = true
			state.deniedInformationLogin = false
		},
		deniedInformation: (state) => {
			state.deniedInformationLogin = true
			state.acceptInformationLogin = false
		},
	},
	extraReducers: (builder) =>{
		builder.addCase(,state => {
		})
	} 
})

export const { acceptInformation, deniedInformation } = userLoginSlice.actions

export default userLoginSlice.reducer
