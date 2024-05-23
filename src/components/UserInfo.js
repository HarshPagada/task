import React from 'react'

const UserInfo = ({name, bio}) => {
  return (
    <div className='user-info'>
        <h2>{name}</h2>
        <p>{bio}</p>
    </div>
  )
}

export default UserInfo
