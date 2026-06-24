import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    like: 0,
    dislike: 0
}

export const likeDislikeSlice = createSlice({
    name: 'likeDislike',
    initialState,
    reducers: {

    }
})