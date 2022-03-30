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
        <div className="mx-auto max-w-screen-xl mt-20 pt-10">
            <h1 className="mb-5 text-4xl"> I am From Friends</h1>
            <h1 className="mb-20 text-3xl font-semibold">
                Friends: {friends.length}
            </h1>
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 ">
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}></Friend>
                ))}
            </div>
        </div>
    )
}

export default Friends
