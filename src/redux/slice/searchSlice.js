import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'searchtext',
    initialState : {
        searchText : ''
    },
    reducers: {
        getSearchText : (state, action) => {
            state.searchText = action.payload
        }
    }
})

export const {getSearchText} = searchSlice.actions;
export default searchSlice.reducer