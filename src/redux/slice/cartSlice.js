import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'
const initialState = {
    openSideCart: null,
    openBuyFast: null,
    listCart: [],
    updateCart: null,
}

export const loginCart = createAsyncThunk('logincart', async () => {
    const response = await axios.get('/cart/get-loged-in-cart', {
        headers: {
            Authorization: JSON.parse(localStorage.getItem('TOKEN'))
        }
    }
    );
    return response.data.cart.listProduct
})
export const removeCart = createAsyncThunk('logincart', async () => {
    const response = await axios.get('/cart/get-loged-in-cart', {
        headers: {
            Authorization: JSON.parse(localStorage.getItem('TOKEN'))
        }
    }
    );
    return response.data.cart.listProduct
})

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
        buyFast: (state, action) => {
            state.buyFast = action.payload;
        },
 
    },
    extraReducers: builder => {
        builder
           .addCase(loginCart.fulfilled, (state, action) => {
            state.listCart = action.payload
            localStorage.setItem('LIST_CART', JSON.stringify(state.listCart))
           })

    }
});

export const { openSideCart, openBuyFast, buyFast } = cartSlice.actions

export default cartSlice.reducer