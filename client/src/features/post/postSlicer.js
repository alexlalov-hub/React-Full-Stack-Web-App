import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch } from "../../api";

export const getPosts = createAsyncThunk('/post/getPosts', async (page) => {
    return await fetchPosts(page)
})

export const searchForPosts = createAsyncThunk('/post/searchForPosts', async (search) => {
    return await getPostsBySearch(search)
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
    currentPage: null,
    numberOfPages: null
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        [getPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload.posts
            state.currentPage = payload.currentPage
            state.numberOfPages = payload.numberOfPages
        },
        [postCreation.fulfilled]: (state, { payload }) => {
            state.posts = [...state.posts, payload]
        },
        [postUpdate.fulfilled && postLiking.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.map((post) => post._id === payload._id ? payload : post)
        },
        [postDeletion.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.filter((post) => post._id !== payload._id)
        },
        [searchForPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload.data
        }
    }
})

export default postsSlice.reducer;