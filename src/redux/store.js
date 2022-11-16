
import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer  from './slice/allProductsSlice';
import openReducer from './slice/openSlice'


const store = configureStore({
    reducer: {
        open: openReducer,
        allproducts: allProductsReducer
    }
})


export default store