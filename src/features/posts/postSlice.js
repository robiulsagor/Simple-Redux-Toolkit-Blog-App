import { createSlice } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = [
    {
        id: 1,
        title: 'This is the title of post 1',
        body: 'This is the body of the post numbere one. ',
        date: sub(new Date(), { minutes: 40 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 2,
        title: 'This is the title of post 2',
        body: 'This is the body of the post numbere two. ',
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        },
        reactionsAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const { addPost, reactionsAdded } = postSlice.actions

export const postsSelector = state => state.posts

export default postSlice.reducer