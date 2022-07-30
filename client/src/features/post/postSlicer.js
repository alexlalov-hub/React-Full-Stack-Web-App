import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPosts, createPost } from "../../api";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return await fetchPosts()
})

export const postCreation = createAsyncThunk('/posts/postCreation', async (newPost) => {
    return await createPost(newPost)
})

const initialState = {
    posts: [],
    status: null
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload
            state.status = 'success'
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [postCreation.pending]: (state, action) => {
            state.status = 'pending'
        },
        [postCreation.fulfilled]: (state, { payload }) => {
            state.posts.push(payload)
            state.status = 'success'
        },
        [postCreation.rejected]: (state, action) => {
            state.stasus = 'failed'
        }
    }
})

export default postsSlice.reducer;