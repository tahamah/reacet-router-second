import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl my-4 font-medium">
                Every Posts Facebook ever had: {posts.length}
            </h1>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <Link
                        className="bg-sky-500 m-4 py-3 px-5  text-white rounded hover:bg-sky-800 "
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >
                        {post.id}
                    </Link>
                ))}
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Posts
