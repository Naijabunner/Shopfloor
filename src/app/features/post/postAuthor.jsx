import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {
    const users =useSelector(selectAllUsers)
    const author =users.find(users=>users.id === userId)
  return (
    <div>by {author ? author.name: 'unknown author'}</div>
  )
}

export default PostAuthor