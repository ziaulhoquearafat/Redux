import { configureStore } from '@reduxjs/toolkit'
import likeDislikeReducer from '../redux/features/like-disliker/likeDislikeSlice'


const store = configureStore({
    reducer: {
        likeDislike: likeDislikeReducer
    },
})

export default store;