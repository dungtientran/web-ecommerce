import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openSideCart: null,
    openBuyFast: null,
    cartItem: [],
    totalAmount: 0,
    totalPrice: 0
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
        buyFast: (state, action) => {
            state.buyFast = action.payload;
        },
        addCart: (state, action) => {
            const newCart = action.payload;
            const checkDuplicate = state.cartItem.find((item) => item.id === newCart.id);
            if (!checkDuplicate) {
                state.cartItem.push({
                    id: newCart.id,
                    name: newCart.name,
                    thumbnail: newCart.thumbnail,
                    color: newCart.color,
                    rom: newCart.rom,
                    ram: newCart.ram,
                    amountBuy: newCart.amountBuy,
                    price: newCart.price,
                })
            } else {
                state.cartItem.find((item) => {
                    if (item.id === newCart.id) {
                        item.amountBuy += newCart.amountBuy
                    }
                })
            }
            state.cartItem.map(item => item.totalPriceOne = Number(item.amountBuy) * Number(item.price));
            localStorage.setItem('LIST_CART', JSON.stringify(state.cartItem));
            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.amountBuy), 0);
            localStorage.setItem('TOTAL_AMOUNT', JSON.stringify(state.totalAmount));
            state.totalPrice = state.cartItem.reduce((total, item) => total + Number(item.totalPriceOne), 0);
            localStorage.setItem('TOLTAL_PRICE', JSON.stringify(state.totalPrice));
        },
        update: (state, action) => {

        }
    },
});

export const { openSideCart, openBuyFast, buyFast, addCart } = cartSlice.actions

export default cartSlice.reducer