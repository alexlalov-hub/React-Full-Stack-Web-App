import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            localStorage.setItem('user', JSON.stringify(jwtDecode(payload)))

            return { ...state, user: jwtDecode(payload) }
        },
        logOut(state, action) {
            localStorage.clear()

            return { ...state, user: null }
        }
    }
})

export const { login, logOut } = authSlice.actions

export default authSlice.reducer;