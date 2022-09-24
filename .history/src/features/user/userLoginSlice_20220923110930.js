import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {setWithExpiry} from '../../utils/localStorage'
import axios from 'axios'

const initialState = {
	loadingListProducts: false,
  successListProducts: false,
  errorListProducts: false,
	loadingDetailsProduct: false,
  successDetailsProduct: false,
  errorDetailsProduct: false,
	products: [],
  productDetails: {}
}

export const fetchProducts  = createAsyncThunk('product/fetchProducts', () => {
	return axios
		.get('https://front-test-api.herokuapp.com/api/product')
		.then((response) => response.data.map((product) => product))
})

export const fetchProductDetail = createAsyncThunk('productDetails/fetchProductDetail', (id) => {
  return axios
    .get(`https://front-test-api.herokuapp.com/api/product/${id}`)
    .then((response) => response.data)
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loadingListProducts= true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loadingListProducts = false 
      state.successListProducts = true
      state.errorListProducts = false
      state.products = action.payload
      setWithExpiry('products', JSON.stringify(action.payload),360000)
    })
    builder.addCase(fetchProducts.rejected, (state, action) =>{
      state.loadingListProducts= false
      state.successListProducts = false
      state.errorListProducts = true
      state.products = []
      state.errorListProducts = action.error.message 
    })
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.loadingDetailsProduct = false
    })
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.loadingDetailsProduct = false 
      state.successDetailsProduct = true
      state.errorDetailsProduct = false
      state.productDetails = action.payload
      setWithExpiry('productDetails', JSON.stringify(action.payload), 360000)
    })
    builder.addCase(fetchProductDetail.rejected, (state, action) =>{
      state.loadingListProducts= false
      state.successListProducts = false
      state.errorListProducts = true
      state.products = []
      state.errorListProducts = action.error.message 
    })
  }
})


export default productSlice.reducer