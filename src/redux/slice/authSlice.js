import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios';

const initialState = {
    token: '',
    userInfor: null
}

export const userLogin = createAsyncThunk('login', async (user) => {
    try {
        const response = await axios.post('/auth/sign-in', user);
        console.log(response);
        return response.data.token;
       
    } catch (error) {
        alert('Sai tai khoan hoac mat khau');
    }
})

export const getUserInfor = createAsyncThunk('userinfo', async () => {
    const respose = await axios.get('/auth/get-loged-in-user', {
        headers: {
            Authorization: localStorage.getItem('TOKEN')
        }
    });
    return respose.data.user;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: builder => (
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                state.token = action.payload
                localStorage.setItem('TOKEN', state.token)
            })
            .addCase(getUserInfor.fulfilled, (state, action) => {
                state.userInfor = action.payload
                localStorage.setItem('USER', JSON.stringify(state.userInfor))
            })
    )
});

export default authSlice.reducer