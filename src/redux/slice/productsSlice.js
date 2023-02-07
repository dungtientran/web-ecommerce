import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios';

const initialState = {
    allproducts: [],
    allCategories: []
}

export const getAllProducsts = createAsyncThunk('getallproducts', async () => {
    const response = await axios.get('/product/get-all-products')
    return response.data.products
})
export const getAllCategories = createAsyncThunk('getallcatefories', async () => {
    const response = await axios.get('/category/get-all-categories')
    return response.data.categories
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      getAll: (state, action) => {
        state.allproducts = action.payload
      }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllProducsts.fulfilled, (state, action) => {
                state.allproducts = action.payload;
                localStorage.setItem('ALL_PRODUCTS', JSON.stringify(state.allproducts))
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.allCategories = action.payload
                localStorage.setItem('ALL_CATEGORIES_NAME', JSON.stringify(state.allCategories))
            })
    }
});

export const {allProduct } = productsSlice.actions

export default productsSlice.reducer