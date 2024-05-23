import React from 'react'

const Avatar = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} className='avatar' style={{ height: "50px", width: "50px" }} />
        </div>
    )
}

export default Avatar
