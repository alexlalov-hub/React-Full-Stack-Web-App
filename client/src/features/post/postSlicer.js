import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const postsSlice = createSlice({
    name: 'posts',
    initialState
})

export default postsSlice.reducer;
// console.log(postsSlice);