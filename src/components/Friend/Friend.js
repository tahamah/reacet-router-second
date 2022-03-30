import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Friend = ({ friend }) => {
    const { id, username, name } = friend
    let navigate = useNavigate()
    const showFriendDetail = () => {
        navigate('/friend/' + id)
    }
    return (
        <div className="rounded-lg p-3 border-2 border-sky-500">
            <h1>Name: {name}</h1>
            {/* <Link
                className="bg-sky-500 text-white px-4 pb-1 rounded mt-5 hover:bg-sky-800 text-sky"
                to={'/friend/' + id}
            >
                {' '}
                Show Detail{' '}
            </Link> */}
            <button
                onClick={showFriendDetail}
                className="bg-sky-500 text-white px-4 pb-1 rounded mt-5 hover:bg-sky-800 text-sky"
            >
                {username} :{id}
            </button>
        </div>
    )
}

export default Friend
