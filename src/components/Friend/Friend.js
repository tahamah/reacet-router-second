import React from 'react'
import { useNavigate } from 'react-router-dom'

const Friend = ({ friend }) => {
    let navigate = useNavigate()
    const showFriendDetail = () => {
        navigate(`/friends/${friend.id}`)
    }
    return (
        <div className="rounded-lg p-3 border-2 border-sky-500">
            <h1>Name: {friend.name}</h1>
            <button
                onClick={showFriendDetail}
                className="bg-sky-500 text-white px-4 pb-1 rounded mt-5 hover:bg-sky-800 text-sky"
            >
                {friend.username} :{friend.id}
            </button>
        </div>
    )
}

export default Friend
