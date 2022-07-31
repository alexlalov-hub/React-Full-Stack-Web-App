import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPosts, createPost, updatePost } from "../../api";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return await fetchPosts()
})

export const postCreation = createAsyncThunk('/posts/postCreation', async (newPost) => {
    return await createPost(newPost)
})

export const postUpdate = createAsyncThunk('/posts/postUpdate', async (id, updatedPost) => {
    return await updatePost(id, updatedPost)
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
            state.posts = [...state.posts, payload]
            state.status = 'success'
        },
        [postCreation.rejected]: (state, action) => {
            state.stasus = 'failed'
        },
        [postUpdate.pending]: (state, action) => {
            state.status = 'pending'
        },
        [postUpdate.fulfilled]: (state, { payload }) => {
            state.posts.map((post) => post._id === payload._id ? payload : post)
            state.status = 'success'
        },
        [postUpdate.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default postsSlice.reducer;