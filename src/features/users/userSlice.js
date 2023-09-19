import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        name: 'Sagor'
    },
    {
        id: 2,
        name: 'Babu'
    },
    {
        id: 3,
        name: 'Akash'
    },
    {
        id: 4,
        name: 'Mahir'
    },
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    }
})

export const userSelector = state => state.users

export default userSlice.reducer