
import { configureStore } from '@reduxjs/toolkit';
import openReducer from './slice/openSlice';
import navBarRuducer from './slice/navBarSlide'
import searchSliceReducer from './slice/searchSlice';
import productsReducer from './slice/productsSlice';
import authReducer from './slice/authSlice';
const store = configureStore({
    reducer: {
        open: openReducer,    
        transferNavBar: navBarRuducer,
        searchtext: searchSliceReducer,
        products: productsReducer,
        auth: authReducer
    }
})


export default store