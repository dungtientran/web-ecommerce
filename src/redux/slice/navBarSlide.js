import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
    name: 'navbar',
    initialState: {
        transferNavBar: null,
    },
    reducers: {
        transferNavBar: (state, action) => {
            state.transferNavBar = action.payload
            localStorage.setItem('PRODUCTS_NAME', state.transferNavBar)
        }
    }
})

export const { transferNavBar } = navBarSlice.actions;
export default navBarSlice.reducer