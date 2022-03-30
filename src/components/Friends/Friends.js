import React, { useEffect, useState } from 'react'
import Friend from '../Friend/Friend'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setFriends(data))
    }, [])
    return (
        <div>
            <h1 className="mb-12 text-4xl"> I am From Friends</h1>
            <h1 className="mb-2 text-3xl">Friends: {friends.length}</h1>
            <div>
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}></Friend>
                ))}
            </div>
        </div>
    )
}

export default Friends
