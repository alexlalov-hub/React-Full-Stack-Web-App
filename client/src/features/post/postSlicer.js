import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPosts, createPost, updatePost, deletePost, likePost } from "../../api";

export const getPosts = createAsyncThunk('/post/getPosts', async () => {
    return await fetchPosts()
})

export const postUpdate = createAsyncThunk('/post/postUpdate', async (data) => {
    return await updatePost(data.currentId, data.postData)
})

export const postCreation = createAsyncThunk('/post/postCreation', async (newPost) => {
    return await createPost(newPost)
})

export const postDeletion = createAsyncThunk('/post/postDeletion', async (id) => {
    return await deletePost(id)
})

export const postLiking = createAsyncThunk('/post/postLiking', async (id) => {
    return await likePost(id)
})

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        [getPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload
        },
        [postCreation.fulfilled]: (state, { payload }) => {
            state.posts = [...state.posts, payload]
        },
        [postUpdate.fulfilled && postLiking.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.map((post) => post._id === payload._id ? payload : post)
        },
        [postDeletion.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.filter((post) => post._id !== payload._id)
        }
    }
})

export default postsSlice.reducer;