import React, { useState, useEffect } from 'react'
import UserProfile from './UserProfile'

const UserProfileContainer = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const UserData = {
                name: 'ankit', //rohan
                bio: 'software developer',
                avatar: 'https://via.palceholder.com/150'
            }
            setUser(UserData)
        }

        fetchUserData();
    }, []);

    return (
        <div>
            {user ?
                (<UserProfile name={user.name} bio={user.bio} avatar={user.avatar} />) : ('Loading...')
            }
        </div>
    )
}

export default UserProfileContainer
