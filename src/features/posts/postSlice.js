import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        title: 'This is the title of post 1',
        body: 'This is the body of the post numbere one. '
    },
    {
        id: 2,
        title: 'This is the title of post 2',
        body: 'This is the body of the post numbere two. '
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addPost } = postSlice.actions

export const postsSelector = state => state.posts

export default postSlice.reducer