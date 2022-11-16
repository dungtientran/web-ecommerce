import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as apis from '../../apis';
export const allProductsSlice = createSlice({
    name: 'allproducts',
    initialState: {status: 'idle', allproducts: []},
    reducers: {
        getAllProducts: (state, action) => {
            state.alluser = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.allproducts = action.payload
        })
    }
})

export const fetchProducts = createAsyncThunk('alluser', async () => {
    const res = await apis.getAllProducts()
    return res.data.products
})

export const { getAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer