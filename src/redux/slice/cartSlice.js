import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    openSideCart: null,
    openBuyFast: null,
}




const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openSideCart: (state, action) => {
            state.openSideCart = action.payload;
        },
        openBuyFast: (state, action) => {
            state.openBuyFast = action.payload;
        },
    },
    extraReducers: builder => {
        
    }
});

export const { } = cartSlice.actions

export default cartSlice.reducer