import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/post/postSlicer'

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})
