
import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer  from './slice/allProductsSlice';
import openReducer from './slice/openSlice';
import navBarRuducer from './slice/navBarSlide'


const store = configureStore({
    reducer: {
        open: openReducer,
        allproducts: allProductsReducer,
        transferNavBar: navBarRuducer
    }
})


export default store