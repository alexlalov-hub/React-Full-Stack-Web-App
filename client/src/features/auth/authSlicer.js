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
    userError: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            const sentData = {
                user: jwtDecode(payload),
                token: payload
            }
            localStorage.setItem('user', JSON.stringify(sentData))

            state.user = sentData.user
        },
        logOut(state, action) {
            localStorage.clear()

            state.user = null
        }
    },
    extraReducers: {
        [signingIn.fulfilled]: (state, { payload }) => {
            if (payload?.message === 'User not found!') {
                state.userError = 'User not found!'
            } else {
                localStorage.setItem('user', JSON.stringify(payload))

                state.user = payload.user
            }

        },
        [signingUp.fulfilled]: (state, { payload }) => {
            if (payload?.message === 'User already exist') {
                state.userError = 'User already exist!'
            } else {
                localStorage.setItem('user', JSON.stringify(payload))

                state.user = payload.newUser
            }
        }
    }
})

export const { login, logOut } = authSlice.actions

export default authSlice.reducer;