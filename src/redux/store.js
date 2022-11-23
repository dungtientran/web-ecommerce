
import { configureStore } from '@reduxjs/toolkit';
import navBarRuducer from './slice/navBarSlide'
import searchSliceReducer from './slice/searchSlice';
import productsReducer from './slice/productsSlice';
import authReducer from './slice/authSlice';
import cartReducer from './slice/cartSlice'
const store = configureStore({
    reducer: {
        transferNavBar: navBarRuducer,
        searchtext: searchSliceReducer,
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer
    },
})


export default store