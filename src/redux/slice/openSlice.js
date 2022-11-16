import { createSlice } from '@reduxjs/toolkit';
export const sidecartSlice = createSlice({
    name: 'sideCart',
    initialState: {
        openSideCart: null,
        cartItem: [],
        openBuyFast: null,
        buyFast: null,
        totalAmount: 0,
        totalPrice: 0,
    },
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
                    totalPrice: newCart.totalPrice
                })

            }else{
                state.cartItem.find((item) => {
                    if(item.id === newCart.id) {
                         item.amountBuy += newCart.amountBuy
                    }
                })
                checkDuplicate.totalPrice = Number(checkDuplicate.totalPrice)
            }
             const arrtotalAmount = []
             state.cartItem.map((item) => {
                arrtotalAmount.push(item.amountBuy)
                return item
             })
             state.totalAmount = arrtotalAmount.reduce((total, item) => total + Number(item));
             

       }
    }
})
export const { openSideCart, openBuyFast, buyFast, addCart } = sidecartSlice.actions;
export default sidecartSlice.reducer;