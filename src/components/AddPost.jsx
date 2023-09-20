import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import './post.css'
import { addNewPost, addPost } from "../features/posts/postSlice"
import { nanoid } from '@reduxjs/toolkit'
import { userSelector } from "../features/users/userSlice"



const AddPost = () => {
    const [userId, setUserId] = useState()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const users = useSelector(userSelector)

    const UserOpt = users.map(user => (
        <option key={user.id} value={user.id}>{user.name} </option>
    ))

    const canSave = Boolean(title) && Boolean(userId) && Boolean(body)


    // const handleSumbit = e => {
    //     e.preventDefault()
    //     dispatch(addPost({
    //         id: nanoid(),
    //         title,
    //         userId,
    //         body,
    //         date: new Date().toISOString()
    //     }))
    // }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit");

        dispatch(addNewPost({
            title,
            body,
            userId
        }))
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Add New Post</h2>
            <div className="form-group">
                <label htmlFor="title">Post Title:</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter your post title" />
            </div>

            <div className="form-group">
                <label htmlFor="body">Post Author:</label>
                <select value={userId} onChange={e => setUserId(e.target.value)}>
                    <option value="" ></option>
                    {UserOpt}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="body">Post Body:</label>
                <textarea id="body" value={body} onChange={e => setBody(e.target.value)} placeholder="Enter your post Body"></textarea>
            </div>

            <button type="submit" disabled={!canSave}>Submit</button>

        </form>
    )
}

export default AddPost