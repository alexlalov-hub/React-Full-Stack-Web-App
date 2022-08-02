import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/post/postSlicer'
import authSlicer from '../features/auth/authSlicer'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authSlicer
    }
})
