import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// const initialState = [
//     {
//         id: 1,
//         name: 'Sagor'
//     },
//     {
//         id: 2,
//         name: 'Babu'
//     },
//     {
//         id: 3,
//         name: 'Akash'
//     },
//     {
//         id: 4,
//         name: 'Mahir'
//     },
// ]

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return response.data
    } catch (error) {
        return error.message
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
            })
    }
})

export const userSelector = state => state.users

export default userSlice.reducer