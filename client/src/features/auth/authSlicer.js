import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { signIn, signUp } from "../../api";

export const signingIn = createAsyncThunk('/auth/signingIn', async (data) => {
    return await signIn(data.userData, data.navigate)
})
export const signingUp = createAsyncThunk('/auth/signingUp', async (data) => {
    return await signUp(data.userData, data.navigate)
})

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            localStorage.setItem('user', JSON.stringify(payload.token))

            state.user = payload.user
        },
        logOut(state, action) {
            localStorage.clear()

            state.user = null
        }
    },
    extraReducers: {
        [signingIn.fulfilled]: (state, { payload }) => {
            localStorage.setItem('user', JSON.stringify(payload))

            state.user = payload.user
        },
        [signingUp.fulfilled]: (state, { payload }) => {
            localStorage.setItem('user', JSON.stringify(payload))

            state.user = payload.newUser
        },
        [signingUp.rejected]: (state, { payload }) => {
            console.log(payload);
        }
    }
})

export const { login, logOut } = authSlice.actions

export default authSlice.reducer;