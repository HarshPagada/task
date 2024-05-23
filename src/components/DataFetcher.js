import React from 'react'
import UserProfile from './UserProfile'
import { resource } from '../FakeApi'

const DataFetcher = () => {
    const data = resource.read()
    return (
        <div>
            <UserProfile name={data.name} bio={data.bio} avatar={data.avatar}/>
        </div>
    )
}

export default DataFetcher
