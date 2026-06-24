import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    like: 0,
    dislike: 0
}

const likeDislikeSlice = createSlice({
    name: 'likeDislike',
    initialState,
    reducers: {
        increaseLikes: (state) => {
            state.like = + 1
        },
        increaseDislikes: (state) => {
            state.dislike = +1
        }
    }
})

export const { increaseLikes, increaseDislikes } = likeDislikeSlice.actions
export default likeDislikeSlice.reducer