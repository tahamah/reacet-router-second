import React, { useEffect, useState } from 'react'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Friends: {friends.length}</h1>
        </div>
    )
}

export default Friends
