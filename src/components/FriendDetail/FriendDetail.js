import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FriendDetail = () => {
    const { friendId } = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then((res) => res.json())
            .then((data) => setDetail(data))
    }, [])
    const { name, email, address } = detail
    return (
        <div className="rounded-lg w-3/5 md:w-2/5 lg:w-1/5 p-6 border-2 mx-auto mt-10 border-sky-500">
            <div>
                <h1> Name: {name}</h1>
                <p>Email:{email}</p>
                <p> Address: {address?.city}</p>
                <p>This is a friend: {friendId}</p>
            </div>
        </div>
    )
}

export default FriendDetail
