import React from 'react'
import Avatar from './Avatar'
import UserInfo from './UserInfo'

const UserProfile = ({name, bio, avatar}) => {
    if (name === "rohan") {
        throw new Error('simulated error')
    }
  return (
    <div className='user-profile'>
      <Avatar src={avatar} alt={`${name}'s avatar`}/>
      <UserInfo name={name} bio={bio}/>
    </div>
  )
}

export default UserProfile
