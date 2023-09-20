import React from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../features/users/userSlice';

const UserInfo = ({ userId }) => {
    const allUsers = useSelector(userSelector)
    const getAuthor = allUsers.find(u => u.id == userId)
    return (
        <small>by {userId ? getAuthor.name : 'Unknown Author'}</small>
    )
}

export default UserInfo