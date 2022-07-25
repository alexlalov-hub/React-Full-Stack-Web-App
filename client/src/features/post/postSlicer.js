import { createSlice } from "@reduxjs/toolkit";

import { fetchPosts } from "../../api";

let initialState = {}

async function setInitalState() {
    const posts = await fetchPosts()

    initialState = {
        posts
    }
}
setInitalState()
export const postsSlice = createSlice({
    name: 'posts',
    initialState
})

export default postsSlice.reducer;