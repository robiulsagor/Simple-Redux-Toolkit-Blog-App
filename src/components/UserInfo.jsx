import React from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../features/users/userSlice';

const UserInfo = ({ user }) => {
    const getUser = useSelector(userSelector)

    const uName = getUser.find(u => u.id == user)
    return (
        <small>by {user ? uName.name : 'Unknown Author'}</small>
    )
}

export default UserInfo